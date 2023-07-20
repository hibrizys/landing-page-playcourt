# Playcourt Landing Page

Project task from Telkom Indonesia (Digital Infrastructure & Security)

## Overview

[PlayCourt](https://playcourt.id/) is a Platform as a Service (PaaS) serving as the Digital Infrastructure at the Digital Service Division of PT Telekomunikasi Indonesia. PlayCourt is a comprehensive application development platform specifically designed for the development of Telkom Indonesia's digital products.

## Project Plan

![Project Plan](https://raw.githubusercontent.com/hibrizys/landing-page-playcourt/main/src/assets/img/Project_Plan.png)

## Run as NodeJs

Install dependencies, devDependencies, etc
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

## Run as Docker

Build image docker
```
docker build -t playcourt .
```

Run container docker
```
docker run -p 8080:80 -it --name playcourt playcourt
```

## Testing Unit

Coming Soon!

## Deploy

You can see link deploy with Netlify in [here](https://playcourt.netlify.app/)