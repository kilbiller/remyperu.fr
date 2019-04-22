FROM node:10-alpine

COPY . /app

WORKDIR /app

RUN yarn install --production --frozen-lockfile

ENV NODE_ENV=production

EXPOSE 8000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
