FROM node:10-alpine

COPY . /app

WORKDIR /app

RUN yarn install --frozen-lockfile

ENV NODE_ENV=production

RUN yarn build

EXPOSE 8000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
