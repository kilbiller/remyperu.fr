import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { networkInterfaces } from 'os';

import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';

var app = new Koa();
var router = new Router();

app.use(serve('./public'));

router.get('/', (ctx, next) => {
  const html = `<!DOCTYPE html>
  ${renderToStaticMarkup(<Home />)}`;

  ctx.type = 'html';
  ctx.body = html;
});

router.get('/cv', (ctx, next) => {
  const html = `<!DOCTYPE html>
  ${renderToStaticMarkup(<CV />)}`;

  ctx.type = 'html';
  ctx.body = html;
});

router.get('/contact', (ctx, next) => {
  const html = `<!DOCTYPE html>
  ${renderToStaticMarkup(<Contact />)}`;

  ctx.type = 'html';
  ctx.body = html;
});

router.get('/kubernetes', (ctx, next) => {
  const interfaces = networkInterfaces();

  const [{ address }] = Object.values(interfaces as unknown as any[]).flatMap(
    (interfaces: any[]) =>
      interfaces.filter((prop) => prop.family === 'IPv4' && !prop.internal)
  );

  ctx.type = 'json';
  ctx.body = {
    host_ip: address,
    your_ip: ctx.req.headers['x-forwarded-for'] || ctx.req.socket.remoteAddress,
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);

console.log('Listening on port 8000.');
