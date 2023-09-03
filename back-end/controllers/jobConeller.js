const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");


const JobSchema = require( '../models/jobModel')
exports.AddJob = async (req,res,next)=>{
  const {title,description,category,SkillRequierd,Budget,projectDuration,experienceLevel,token} = req.body
  const decodedToken = jwt.decode(token);
  const id = decodedToken.id
  console.log("token: ",token)
  console.log("id: ",id)


  const addjob = new JobSchema(
      { client:id,
        title,
        description,
        category,
        SkillRequierd,
        Budget,
        projectDuration,
        experienceLevel}
    )

  
    await addjob.save()
    res.status(200).json({message:"Job Created"});

}
