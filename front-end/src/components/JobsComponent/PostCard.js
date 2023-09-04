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

function Applly(){
    return(
        <div className="offcanvas offcanvas-end" style={{background: "#071C42"}} tabindex="-1" id="apply" aria-labelledby="applyLabel">
            <div className="offcanvas-header">
                <h5 id="applyLabel" className="text-light">Apply for The Job</h5>
                <button type="button" className="btn-close text-reset text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <div
            className="container-fluid d-flex justify-content-center align-items-center"
                >
                <form
                    method="POST"
                    className="card w-100"
                    style={{background: "#071C42"}} 
                >
                <div class="mb-3 mt-3">
                    <label htmlFor="email" class="form-label fs-6 text-light">
                        Budget Deal:
                    </label>
                    <input
                        name="price"
                        type="number"
                        class="form-control"
                        id="price"
                        placeholder="Your Price"
                        required
                    />
                    </div>
                    <div class="mb-3 mt-3">
                    <label htmlFor="password" class="form-label fs-6 text-light">
                        Cover Latter
                    </label>
                    <textarea class="form-control w-100" rows="4" id="cover" placeholder="Write Cover Latter" name="description" required></textarea>
                    </div>
                    <div class="mt-3 mb-3 d-flex">
                    <p className="text-light ">Do not have account ? </p>
                    <a href="/signup" className="link-light mx-2">
                        Signup
                    </a>
                    </div>
                    <button
                    className="btn w-100 border-primary rounded-5 text-light mt-3"
                    >
                        Apply
                    </button>
                </form>
            </div>

        </div>
    </div>
    )
}

// RecommendedJobPost

const PostCard = ({ title, description, skills, location, postDate, deadline, price }) => {
  return (
    <div className="card my-5 px-3">
    <Applly />
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
        <div className="col-12 col-md-4 d-flex justify-content-md-end py-2 py-md-0">
            <button className="btn btn-outline-primary mx-3 py-1 my-1">Save Project</button>
            <button className="btn btn-primary mx-3 py-1 my-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#apply" aria-controls="apply">Apply Now</button>
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
