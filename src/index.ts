import 'reflect-metadata'
import { createKoaServer, Action, BadRequestError, useKoaServer } from "routing-controllers"
import setupDb from './db'
import TestController from './test/controller'
import * as Koa from 'koa'

const port = process.env.PORT || 4008

const app = createKoaServer({
  controllers: [
    TestController,
  ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))




// const app = new Koa()
// const server = new Server(app.callback())
// const port = process.env.PORT || 4000



// useKoaServer(app, {
//   cors: true,
//   controllers: [
//     TestController,
//   ]
// })


  