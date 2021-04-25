# remyperu.fr

[![Build Status](https://build.remyperu.dev/api/badges/kilbiller/remyperu.fr/status.svg)](https://build.remyperu.dev/kilbiller/remyperu.fr)

My own website https://remyperu.fr

## Technologies

- NodeJS
- Koa
- Kubernetes

## Build docker image

```bash
DOCKER_BUILDKIT=1 docker build . -t kilbiller/remyperu.fr
```

## Run image

```bash
docker run -p 8000:8000 -d kilbiller/remyperu.fr:latest
```

## Deployment

```bash
kustomize build k8s/overlays/production | kubectl apply -f -
```
