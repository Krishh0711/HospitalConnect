const Doctor = require('../../../models/doctor');
var passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

//create new doctor -- api
module.exports.create = async function(request,response){
    try {
     //match password and confirm password
     if(request.body.password !=  request.body.confirm_password){
      return response.status(422).json({
        message:"Password and confirm password didn't match"
      });
     }
     
     let doctor = await Doctor.findOne({email: request.body.email});
     //if no doctor with that email exist- create new doctor
     if(!doctor){
      let doctorInsert = await Doctor.create({
        email: request.body.email,
        password: passwordHash.generate(request.body.password),
        name:request.body.name
      });

      return response.status(200).json({
        message:"Doctor's detail inserted successfully"
      });
      //if doctor exist send some response
      }else{

        return response.status(422).json({
          message:"Doctor already exist"
        });

      }
       
    } catch (error) {
      //if any error occurs in try
      console.log('Error --->' , error);
      return response.status(500).json({
        message:"Internal server error"
      });

    }
  }

 //log in doctor and send jwt key in the reponse to validate further requests
  module.exports.createSession = async function(request,response){

    try {
        let doctor = await Doctor.findOne({email: request.body.email});
        
        if(!doctor || !passwordHash.verify(request.body.password, doctor.password)){
            return response.status(422).json({
                message:"Invalid username or password"
            });
        }

        return response.status(200).json({
            message: "Sign in successful, here  is your token, please keep it safe",
            data: {
                token: jwt.sign(doctor.toJSON(), 'hospitalconnect', {expiresIn: '1000000'})
            }
        });
        
    } catch (error) {
         console.log('*****',error);
         return response.status(500).json({
          message:"Internal server error"
        });
    }   
 }