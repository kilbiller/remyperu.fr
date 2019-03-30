# remyperu.fr

[![Build Status](https://build.remyperu.dev/api/badges/kilbiller/remyperu.fr/status.svg)](https://build.remyperu.dev/kilbiller/remyperu.fr)

My own website https://remyperu.fr

## Technologies

- NodeJS
- Express
- Kubernetes

## Deployment

```bash
kubectl --kubeconfig ~/admin.conf apply -k k8s/overlays/production
```
