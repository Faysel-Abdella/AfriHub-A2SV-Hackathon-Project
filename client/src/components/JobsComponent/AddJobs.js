import React from 'react'
import countries from './countries.json'

const AddJobs = () => {
  return (
    <div className='container'>
        <form className='d-flex flex-column align-items-center'>
            <div className='my-3 w-75 d-flex align-items-center'>
                <h3 className="text-success text-left fs-4">Post Jobs</h3>
            </div>
            <div className="row w-75">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Job Title" name="title" />
                </div>
                <div className="col">
                <select class="form-select">
                    <option>Sellect Country</option>
                    {countries.map(country => {
                        return(
                            <option key={country.id}>{country.CountryName}</option>
                        )
                    })}
                </select>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddJobs