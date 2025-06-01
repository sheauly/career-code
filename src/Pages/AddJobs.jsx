import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
const AddJobs = () => {
    const { user } = useAuth();

    const handdleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        console.log(data)
       
        // process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = {min, max, currency}
        console.log(newJob)

        // process requirments
        const requirementsString = newJob.requirments;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;

        // process responsibilites
        newJob.responsibilites = newJob.responsibilites.split(',').map(res => res.trim())
        
        newJob.status = "active";

        // save job to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
            console.log(error)
        })
        
        // console.log(Object.keys(newJob).length)
    }
    return (
        <div>
            <h1>Please add a job</h1>
            <form onSubmit={handdleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Job Title</label>
                    <input type="text" name='Job title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='name' className="input" placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />
                    <label className="label">Company_logo</label>
                    <input type="text" name='company_logo' className="input" placeholder="Company_logo" />
                </fieldset>

                {/*job type*/}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className='fildset-legend'>Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="JobType" aria-label="All" />
                        <input className="btn" type="radio" name="JobType" aria-label="On-Site" value='On-site' />
                        <input className="btn" type="radio" name="JobType" aria-label="Remote" value="remote" />
                        <input className="btn" type="radio" name="JobType" aria-label="Hybrid" value="hybrid" />
                    </div>
                </fieldset>

                {/*job category*/}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className='fildset-legend'>Job Category</legend>

                    <select defaultValue="Pick a color" name='category' className="select">
                        <option disabled={true}>Pick a color</option>
                        <option>Engnaering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/*Application Dedline*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className='fildset-legend'>Application Dedline</legend>
                    <input type="date" name='date' className="input" />

                </fieldset>
                {/*Salary Range*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">MiniMum</label>
                            <input type="text" name='salray-min' className="input" placeholder="minimum salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='salarymax' className="input" placeholder="Maximum Salary" />
                        </div>
                        <div>

                            <label className="label">Currency</label>
                            <input type="text" name='currency' className="input" placeholder="Currency" />
                            <select defaultValue="Select a Currency" name='category' className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EURU</option>
                            </select>
                        </div>
                        {/*Job  Description */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <div>
                            <label className="label">Description</label>
                                <textarea className="textarea w-full" name='textarea' placeholder="description"></textarea>
                       
                            </div>
                            <div>
                                <label className="label">Job Requairment</label>
                                <textarea className="textarea w-full" name='requirments' placeholder="Job requirments(separate by comma)"></textarea>
                            </div>
                            <div>
                                <label className="label">Job Responsibilities</label>
                                <textarea className="textarea w-full" name='responsibilites' placeholder="Job responsibilities (comma separated)"></textarea>
                            </div>

                        </fieldset>
                    </div>
                </fieldset>

                {/* */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">HR Related Info</label>
                
                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="text" name='hr_email'
                    defaultValue={user.email}    className="input" placeholder="HR email" />
                    
                </fieldset>
                <input type="submit" value="Add Job" className='btn btn-secondary' />
            </form>
        </div>
    );
};

export default AddJobs;