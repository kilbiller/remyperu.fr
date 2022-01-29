FROM node:16-alpine

USER node

WORKDIR /app

COPY --chown=node:node package.json yarn.lock /app/

RUN yarn install --frozen-lockfile && yarn cache clean

COPY --chown=node:node . /app

ENV NODE_ENV=production

RUN yarn build

EXPOSE 8000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
