const jwt = require("jsonwebtoken");




module.exports.decryptken=(user)=>{
  let objectuser = jwt.decode(user)
console.log(objectuser)
return objectuser
}