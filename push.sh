#!/bin/bash

if [ -z "${1}" ]; then
   version="latest"
else
   version="${1}"
fi


docker push outcomelife/layout:${version}
docker tag -f outcomelife/layout:${version}  outcomelife/layout:latest
docker push outcomelife/layout:latest

