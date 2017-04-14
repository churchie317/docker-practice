#!/bin/bash

# Default HOST:PORT targeted
HOST="localhost"
PORT=1337

function usage {
    echo "Usage: simulator.sh [-h HOST] [-p PORT]"
    exit 1
}

# Parse arguments
while getopts h:p: FLAG; do
    case $FLAG in
        h)
            HOST=$OPTARG
            ;;
        p)
            PORT=$OPTARG
            ;;
        \?)
            usage
            ;;
    esac
done

while(true); do
    d=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    temp=$((( RANDOM % 15 ) + 20 ))
    curl -XPOST -H "Content-Type: application/json" -d '{"ts":"'$d'", "type": "temp", "value": '$temp', "sensor_id": 123 }' http://$HOST:$PORT/data
    sleep 1
done
