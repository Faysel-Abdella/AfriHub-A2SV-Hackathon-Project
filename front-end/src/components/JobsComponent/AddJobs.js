import React, { useRef } from 'react';

import countries from './countries.json'
import currency from './currency.json'
import categories from './category.json'

const AddJobs = () => {

    const skillRef = useRef("");

    const handleSkill = () => {
        const value = skillRef.current.value;
        console.log(value);
    }

  return (
    <div className='container d-flex justify-content-center'>
        <form className='w-75 d-flex flex-column align-items-center'>
            <div className='my-3 w-100 d-flex justify-center-start'>
                <h3 className="text-success text-left fs-4">Post Jobs</h3>
            </div>
            <div className="row my-4 w-100">
                <div className="col">
                    <label className='fs-6 form-label text-primary'>Project Title:</label>
                    <input type="text" className="form-control" placeholder="Enter Job Title" name="title" required/>
                </div>
                <div className="col">
                    <label className='fs-6 form-label text-primary'>Project Location:</label>
                    <select class="form-select" required>
                        <option>Select Country</option>
                        {countries.map(country => {
                            return(
                                <option key={country.id}>{country.CountryName}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div class="row w-100">
                <div class="col">
                    <label className='fs-6 form-label text-primary'>Project Budget:</label>
                    <div class="input-group mb-3">
                        <select class="form-select" name='currency' required>
                            <option>Select Currency</option>
                            {currency.map(data => {
                                return(
                                    <option key={data.id}>{data.Currency}</option>
                                )
                            })}
                        </select>
                        <input type="number" class="form-control" placeholder="Enter Price" name='budget'/>
                    </div>
                </div>
                <div class="col">
                    <label className='fs-6 form-label text-primary'>Project Deadline:</label>
                    <input type="date" class="form-control" placeholder="Deadline" name="deadline" required/>
                </div>
            </div>
            <div className="row my-4 w-100">
                <div className="col">
                    <label className='fs-6 form-label text-primary'>Project Category:</label>
                    <select class="form-select" required>
                        <option>Select Project Category</option>
                        {categories.map(category => {
                                return(
                                    <option key={category.id}>{category.Currency}</option>
                                )
                            })}
                    </select>
                </div>
                <div className="col">
                    <label className='fs-6 form-label text-primary'>Skill Level:</label>
                    <select class="form-select" required>
                        <option>Select Skill Level</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>
            </div>
            <div className='row my-4 w-100'>
                <div className='col-12'>
                    <label className='fs-6 form-label text-primary'>Project Description:</label>
                    <textarea class="form-control w-100" rows="4" name="description" required></textarea>
                </div>
            </div>
            <button className="btn w-100 bg-primary rounded-5 text-light mt-3">Add Job </button>
        </form>
    </div>
  )
}

export default AddJobs