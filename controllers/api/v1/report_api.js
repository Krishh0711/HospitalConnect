const Report = require('../../../models/report');

//get all report with particular status
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

