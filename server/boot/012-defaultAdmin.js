var Promise = require("bluebird")
var co = require("co")
module.exports = function(app,callback){
  initDefaultAdmin(app).then(()=>{
    console.log("init admin user success")
    callback();
  })
  .catch(e=>{
    console.error(e)
    callback(e)
  })
}
// upsert 'sundaAdmin' user
async function initDefaultAdmin(app){
  var user = await app.models.user.findOrCreate({
      username:"testAdmin",
  },{
      username:"testAdmin",
      password:"testAdmin"
  })
  var role = await app.models.Role.findOne({where:{name:'admin'}})
  var count = await role.principals.count({principalId:user.id})
  if(count === 0){
    await role.principals.create({
      principalType: "USER",
      principalId: user.id
    })
  }
}
