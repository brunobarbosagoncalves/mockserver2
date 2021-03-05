# servermock2

## Required

- Docker (https://docs.docker.com/engine/install/)
- Node version >=10.x #if run out docker
- Env file on root .env.development || .env.production || .env.others

## Build and run docker

- cd /path/root/project/on/terminal
- #docker build -t oi/mockserver2 --label oi/mockserver2 --no-cache --tag oi/mockserver2 .
- #docker run -d --net=host -p 9876:9876 oi/mockserver2

## Connect on image

- #docker exec -ti oi/mockserver2 sh

## Access project to test

- localhost:9876/
