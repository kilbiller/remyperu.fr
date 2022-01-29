# remyperu.fr

![Build Status](https://github.com/kilbiller/remyperu.fr/actions/workflows/ci.yml/badge.svg)

My own website https://remyperu.fr

## Technologies

- NodeJS
- Koa
- Kubernetes

## Dev

We're using tilt to have a dev environment as close as a production kubernetes cluster as possible.

```bash
tilt up
```

## Setup docker for multi arch build

```bash
# Add QEMU emulator support for arm and other architectures
docker run --privileged --rm tonistiigi/binfmt --install all
# Create builder & use instance
docker buildx create --use --name multi_builder
```

## Build docker image

```bash
docker buildx build --load . -t kilbiller/remyperu.fr
```

## Push docker image

```bash
docker buildx build --platform linux/amd64,linux/arm64 --push . -t kilbiller/remyperu.fr
```

## Run image

```bash
docker run -p 8000:8000 -d kilbiller/remyperu.fr:latest
```

## Deployment

```bash
kustomize build k8s/overlays/production | kubectl apply -f -
```
