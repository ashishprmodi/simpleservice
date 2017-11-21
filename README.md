# Simple Service

Simple service is an app that serves a single HTML page. You can set the colou, hero text and displayed version using
environment variables.

The only endpoint is at http://localhost:3000

## Run it from source

```bash
git clone git@github.com:magneticio/simpleservice.git
cd simpleservice
npm install
node index.js
```

## Docker build

```bash
docker build -t magneticio/simpleservice:1.0.0 .
```

## Run it in a Docker container

```bash
git clone git@github.com:magneticio/simpleservice.git
cd simpleservice
npm run docker:build
npm run docker:run
```
