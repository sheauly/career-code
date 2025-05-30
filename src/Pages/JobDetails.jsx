
import React from 'react';
import { CiStar } from 'react-icons/ci';

import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, title, company_logo, company, jobType, category } = useLoaderData();

    return (
        <div className='w-10/12 mx-auto rou border border-base-content/5 bg-base-100 mt-8'>
            <h1 className='overflow-x-auto text-center text-2xl font-bold'>Employment Information</h1>
            <div className='flex gap-10 border-1'>
                <img src={company_logo} alt="" />
                <div className='flex justify-center items-center gap-10 text-2xl p-5'>
                    <h2>Title: {title}</h2>
                    <p>Company: {company}</p>
                    <p>{jobType}</p>
                    <p>{category}</p>
                </div>


            </div>
            <div className="">
                {/* <table className="table flex justify-center items-center text-center">
               
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Job</th>
                        </tr>
                </thead>
                <tbody>
                   
                    <tr>
                        
                        <td className='flex text-center gap-1'><CiStar />{title}</td>
                        <td>{company}</td>
                        <td>{jobType}</td>
                        
                    </tr>
                  
                    <tr>
                        
                        <td className='flex text-center gap-1'><CiStar />{category}</td>
                        <td>{applicationDeadline}</td>
                        <td>{hr_email}</td>
                    </tr>
                  
                    <tr>
                        
                        <td className='flex text-center gap-1'><CiStar />{hr_name}</td>
                        <td>{status}</td>
                        <td>{location}</td>
                    </tr>
                </tbody>
            </table> */}

            </div>
            <Link to={`/jobApply/${_id}`}>
                <div className='justify-center items-center text-center m-5'>
                    <button className=' btn btn-primary'>Apply Now</button>
                </div>
            </Link>
        </div>
    );
};

export default JobDetails;