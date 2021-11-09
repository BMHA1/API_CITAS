const jwt = require("jsonwebtoken");




module.exports.role = async (req, res) => {
  try {
    let { objectRole } = jwt.decode(req.headers.token)
    if (objectRole.role === 'admin') next()
  } catch (error) {
    res.json({ error: 'Acceso denegado, lo siento registrese.' })
  }
}

module.exports.decryptoken = (user) => {
  let objectUser = jwt.decode(user)
  console.log(objectUser+'decri')
  return objectUser
}


