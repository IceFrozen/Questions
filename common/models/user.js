'use strict';

const _ = require('lodash')
const Promise = require("bluebird")
const wx = require("../../lib/wechat")
module.exports = function(User) {
  delete User.validations.email;
  User.prototype.createQuestion = async function(params){


  	console.log(this.id)
  	
   let models = User.app.models
   let Groups = models.Groups
  	let question = params

  	let Question = models.Question
  	console.log(JSON.stringify(params))
  	let questionId = params.id || "null"
  	delete params.id
    console.log(questionId)
  	let question_instance = await Question.findById(questionId)
  	if(!question_instance){
  		question_instance = await Question.create(params)
  	}else{
  		question_instance.name = params.name
  		question_instance.delivery = params.delivery
  		question_instance.desc = params.desc
  		question_instance.Groups = params.Groups
  		await question_instance.save()
  	}
  	return question_instance.id
    // let uplevelSeller = await Promise.promisify(this.sellerInfo).call(this)
    // if(!uplevelSeller){
    //   throw new Error("Uplevel seller not exist")
    // }
    // let newPlayer = await models.PlayerInfo.getFromWxCode(wxCode,true)
    //   id:newPlayer.id,
    //   username:"wx:"+newPlayer.wxUnionid,
    //   password:"RANDOM_PASSORD_"+Math.random()
    // }))[0]

    // if(!newPlayer.sellerId) {
    //   newPlayer.sellerId = uplevelSeller.id
    // }
    // await newPlayer.save()
  }
  User.remoteMethod('prototype.createQuestion',{
    accepts:[
      {arg:'params',type:'object'},
    ],
    http:{path:'/createQuestion'},
    returns:{
      arg: 'errcode', type: 'number', root: true
    }
  })
};
