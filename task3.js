const { error } = require('console')
const fs = require('fs')

fs.writeFile('./welcome.txt','Hello Node',(error)=>{
    if ( error)
    console.log(error)
})

fs.readFile('./welcome.txt',"utf8",(error,data)=>{
   if (error)
   console.log(error)
console.log(data)
})
