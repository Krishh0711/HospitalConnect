const mongoose =  require('mongoose');

const patientSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    phone:{
        type: String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
},{
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);


module.exports = Patient;