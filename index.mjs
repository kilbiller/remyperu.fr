import Koa from "koa";
import Router from "koa-router";
import { createReadStream } from "fs";
import serve from "koa-static";

var app = new Koa();
var router = new Router();

app.use(serve("./public"));

router.get("/", (ctx, next) => {
  ctx.type = "html";
  ctx.body = createReadStream("./index.html");
});

router.get("/cv", (ctx, next) => {
  ctx.type = "html";
  ctx.body = createReadStream("./cv.html");
});

router.get("/contact", (ctx, next) => {
  ctx.type = "html";
  ctx.body = createReadStream("./contact.html");
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
