# remyperu.fr

[![Build Status](https://build.remyperu.dev/api/badges/kilbiller/remyperu.fr/status.svg)](https://build.remyperu.dev/kilbiller/remyperu.fr)

My own website https://remyperu.fr

## Technologies

- NodeJS
- Express
- Kubernetes

## Deployment

```bash
kustomize build k8s/production | kubectl --kubeconfig ~/admin.conf apply -f -
```
