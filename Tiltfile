docker_build(
    "kilbiller/remyperu.fr",
    ".",
    entrypoint="yarn nodemon dist/index.js",
    live_update=[
        sync(".", "/app"),
        run("yarn build:js"),
        run("yarn build:css"),
    ],
)

k8s_yaml(kustomize("k8s/overlays/dev"))

k8s_resource("remyperu-web", port_forwards="8000:8000")
