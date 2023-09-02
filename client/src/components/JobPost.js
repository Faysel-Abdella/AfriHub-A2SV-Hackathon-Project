import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

function Rating(){
    return(
        <div className="text-warning">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
    )
}

const JobPost = ({ title, description, skills, location, postDate, deadline, price }) => {
  return (
    <div className="card my-5 px-3">
    <div className="title border-bottom d-flex justify-content-between align-items-center">
        <h4 className="py-2 text-success">{ title }</h4>
        <h4 className="px-3 py-2 text-warning">{ price } BIRR</h4>
    </div>
    <div className="description py-3">
        <p>{description}</p>
    </div>
    <div className="d-flex justify-content-between">
        <div className="d-flex felx-wrap align-items-center">
            {skills.map(skill => {
                return(
                    <span className="flex-item mx-2 bg-light rounded-2 text-dark px-3 py-1">{ skill }</span>
                )
            })}
        </div>
        <div className="">
        <button className="btn btn-primary mx-3 py-1">Save Project</button>
        <button className="btn btn-primary mx-3 py-1">Applay Now</button>
        </div>
    </div>
    <div className="job-info d-flex border-top py-1 mt-2">
        <div className="mx-3">Location: <span className="text-primary">{ location }</span></div>
        <div className="mx-3">Posted on: <span className="text-primary">{ postDate }</span></div>
        <div className="mx-3">Deadline: <span className="text-primary">{ deadline }</span></div>
        <div className="mx-3 d-flex gap-2">Ratin: <Rating /></div>
    </div>
    </div>
  );
};

export default JobPost;
