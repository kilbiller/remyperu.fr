analytics_settings(False)

docker_build(
    "kilbiller/remyperu.fr",
    ".",
    entrypoint="yarn -w dist/index.js nodemon dist/index.js",
    live_update=[
        sync(".", "/app"),
        run("yarn build:js"),
    ],
)

# Execute tailwind locally because it takes too long on the server
local_resource(
    "css",
    serve_cmd="tail -f /dev/null | yarn postcss -o public/css/main.css src/main.css -w",
)

k8s_yaml(kustomize("k8s/overlays/dev"))

k8s_resource("remyperu-web", port_forwards="8000:8000")
