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

// RecommendedJobPost

const PostCard = ({ title, description, skills, location, postDate, deadline, price }) => {
  return (
    <div className="card my-5 px-3">
    <div className="title border-bottom d-flex justify-content-between align-items-center">
        <h4 className="py-2 text-success large-normal">{ title }</h4>
        <h4 className="px-3 py-2 text-warning large">{ price }</h4>
    </div>
    <div className="description py-3">
        <p className="paragraph">{description}</p>
    </div>
    <div className="d-flex flex-wrap justify-content-between">
        <div className="d-flex flex-wrap col-md-8 align-items-center">
            {skills.map(skill => {
                return(
                    <div className="mx-2 bg-light rounded-2 text-dark px-3 py-1">{ skill }</div>
                )
            })}
        </div>
        <div className="col-12 col-md-4 py-2 py-md-0">
            <button className="btn btn-outline-primary mx-3 py-1 my-1">Save Project</button>
            <button className="btn btn-primary mx-3 py-1 my-1">Apply Now</button>
        </div>
    </div>
    <div className=" d-flex flex-wrap border-top py-1 px-4 mt-2">
        <div className="col-5 col-md-3">Location: <span className="text-primary">{ location }</span></div>
        <div className="col-5 col-md-3">Posted on: <span className="text-primary">{ postDate }</span></div>
        <div className="col-5 col-md-3">Deadline: <span className="text-primary">{ deadline }</span></div>
        <div className="col-5 col-md-3 d-flex gap-2">Rating: <Rating /></div>
    </div>
    </div>
  );
};

export default PostCard;
