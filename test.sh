#!/bin/bash

# create test container and ping it
docker container run -d -p 8083:8083 -p 8086:8086 --name influx influxdb
curl -sL -I localhost:8086/ping

while [ $? -ne 0 ];do
    sleep 2
    curl -sL -I localhost:8086/ping
done

curl -i -XPOST http://localhost:8086/query --data-urlencode "q=CREATE DATABASE iot"
# run tests
npm test
# tear down test container
docker container stop influx && docker container rm influx
