FROM node:16-alpine as builder
USER node
WORKDIR /app
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
COPY --chown=node:node . ./
ENV NODE_ENV=production
RUN yarn build

FROM node:16-alpine
USER node
WORKDIR /app
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
ENV NODE_ENV=production
EXPOSE 8000
ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
