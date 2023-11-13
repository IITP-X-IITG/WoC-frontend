#!/bin/bash

if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = "up" || $2 = "down" ]]; then
    cd ..
    fileEnv="docker-compose.${1}.yaml"
    downOrUp=$2
    # if down, delete build artifacts
    if [[ $downOrUp = "down" ]]; then
        rm -rf ./build
        rm ./package-lock.json
    fi
    echo "Running docker-compose -f docker-compose.yaml -f ${fileEnv} ${downOrUp}"
    docker-compose -f docker-compose.yaml -f $fileEnv $downOrUp
else
    echo "Usage: ./deploy.sh [prod|dev] [up|down]"
fi
