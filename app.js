const express=require('express')
const app=express()
const userPage=require('./user.js')
const servicePage=require('./service.js')
const secondPage=require('./secondpage.js')
app.listen(4000)

app.get('/:id',(request,response)=>
{
  response.send("Boring Server")
})
app.use('/user',userPage);
app.use('/service',servicePage);
app.use('/second',secondPage)