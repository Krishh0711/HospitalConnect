const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const Doctor = require('../../../models/doctor');

module.exports.register = async function(request,response){
    try {

        const patient = await Patient.findOne({phone:request.body.phone});
        if(!patient){
            let patientInsert = await Patient.create(request.body);

            return response.status(200).json({
                message: "Patient inserted successfully",
                data:{
                    patient: patientInsert.toJSON()
                }
            });
        }else{
            return response.status(422).json({
                message: "Patient already exist .. go to create report route",
                data:{
                    patient: patient.toJSON()
                }
            });
        }
        
    } catch (error) {
        console.log('error',error);
        return response.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports.createReport = async function(request,response){
    
    try {
        let patient = await Patient.findById(request.params.id);
        if(!patient){
            return response.status(422).json({
                message:"Patient does not exist .. first register the patient"
            })
        }
        let doctor = await Doctor.findOne({email:request.body.createdBy});
        if(!doctor){
            return response.status(422).json({
                message:"Doctor does not exist"
            })
        }
    
            let report = await Report.create({
                patientId: patient._id,
                doctorId: doctor._id,
                status: request.body.status
            });
            return response.status(200).json({
                message:"Report generated successfully! Have a look",
                data:{
                    report: report.toJSON()
                }
            });
        

    } catch (error) {
        console.log('error',error);
        return response.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports.getAllReports = async function(request,response){
    try {
        let patient = await Patient.findById(request.params.id);
        if(!patient){
            return response.status(422).json({
                message:"Patient does not exist .. first register the patient"
            })
        }
        let reports = await Report.find({patientId:patient._id});
        console.log(reports);
        if(reports){
            return response.status(422).json({
                message:"All reports are retrieved",
                data:{
                   reports:reports
                }
            });
        }else{
            return response.status(422).json({
                message:"Patient's report doesen't exist"  
            });
        }
        
    } catch (error) {
        console.log('error',error);
        return response.status(500).json({
            message: "Internal server error"
        });
    }
}