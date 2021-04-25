FROM node:14-alpine

USER node

COPY --chown=node:node . /app

WORKDIR /app

RUN yarn install --frozen-lockfile

ENV NODE_ENV=production

RUN yarn build

EXPOSE 8000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
