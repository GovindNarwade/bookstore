const express = require('express')
const app = express()
const swaggerUI =require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())

const admin = require("./Routes/admin_routes")
const bookStore = require("./Routes/bookStore_routes")
const contact = require("./Routes/contact_routes")

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Book Store",
        version: "1.0.0",
        description: "A Simple Book Store API",
       
      },
  
      servers: [
        {
          url: "http://localhost:3000/",
          description: "Book Store",
        },
      ],
    },
    apis: ["./Routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs-bookStore", swaggerUI.serve, swaggerUI.setup(specs));
 app.use('/api/v1/admin',admin)
 app.use('/api/v1',bookStore)
 app.use('/api/v1',contact)


app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))

