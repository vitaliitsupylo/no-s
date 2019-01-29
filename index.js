const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

app.use(serve(__dirname + '/public'));

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);