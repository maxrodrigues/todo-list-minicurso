FROM node:16
WORKDIR /app
ENTRYPOINT [ ".docker/entrypoint.sh" ]