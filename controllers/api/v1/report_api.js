const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const Doctor = require('../../../models/doctor');

module.exports.reportByStatus = async function(request,response){
    
     try {
         let reports = await Report.find({status:request.params.status});
         return response.status(200).json({
             message:"Report generated are as follows",
             data:{
                  reports:reports     
             }
         });
     } catch (error) {
        return response.status(500).json({
            message:"Internal server error",
        });
     }
}

