# Docker commands for running postgresql and mongodb images.

## Below example is to be used when creating separate containers, docker compose create the full network.

## postgres
    docker run 
    --name postgres \
    -e POSTGRES_USER=root
    -e POSTGRES_PASSWORD=root \
    -e POSTGRES_DB=heroes \
    -p 5431:5432 \ # should map to another port since my local machine has a postgres instance running.
    -d \
    postgres

    full command: 
        docker run --name postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=heroes -p 5431:5432 -d postgres

    docker ps
    docker exec -it postgres /bin/bash

## Adminer for postgres
    docker run `
    --name adminer `
    -p 8080:8080 `
    --link postgres:postgres `
    -d `
    adminer

    full command: 
        docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## Mongodb
full command:
 - mongo server
    docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -d mongo:4

 - mongo client
    docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

#### eval should not be used since it can create a point for "javascript injection"
    docker exec -it 07-multitenancy_mongo_1 mongo --host localhost -u root -p root --authenticationDatabase admin 
--eval "db.getSiblingDB('heroes').createUser({user:'admin', pwd:'adminpassword', roles:[{role:'readWrite', db:'heroes'}]})"