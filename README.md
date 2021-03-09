<h1> servermock2 </h1>

## Required

- Docker (https://docs.docker.com/engine/install/)
- Node version >=10.x (https://nodejs.org/en/download/) #if run out docker
- Env file on root project (.env.development || .env.production || .env.staging)

---

## Build project

```shell

cd /path/root/project/on/terminal
sudo su
docker build -t oi/mockserver2 --label oi/mockserver2 --no-cache --tag oi/mockserver2 .
```

## Run project

```shell

cd /path/root/project/on/terminal
sudo su
docker run -d -p 9876:9876 -e NODE_ENV nodeEnvValue oi/mockserver2
```

- nodeEnvValue: test, development, stage or production (default is development)
- If yon want see logs of all request on mock remove the flag **-d**

## Connect on container

```shell

cd /path/root/project/on/terminal
sudo su
docker exec -ti oi/mockserver2 sh
```

## Access project to test on navigator

- localhost:9876/
