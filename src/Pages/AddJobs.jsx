import React from 'react';

const AddJobs = () => {
    return (
        <div>
            <h1>Please add a job</h1>
            <form>
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
                    <legend className='fildset-legend'>Basic Info</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="JobType" aria-label="All" />
                        <input className="btn" type="radio" name="JobType" aria-label="On-Site" />
                        <input className="btn" type="radio" name="JobType" aria-label="Remote" />
                        <input className="btn" type="radio" name="JobType" aria-label="Hybrid" />
                    </div>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className='fildset-legend'>Basic Info</legend>
                    
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className='fildset-legend'>Basic Info</legend>
                    
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className='fildset-legend'>Basic Info</legend>
                    
                </fieldset>
            </form>
        </div>
    );
};

export default AddJobs;