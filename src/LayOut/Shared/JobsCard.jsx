import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';

const JobsCard = ({job}) => {
    const { title, location, requirements, _id, salaryRange, description, company, company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex gap-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-4xl'>{company}</h3>
                    <p className='flex items-center gap-1'><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions ">
                    {
                        requirements.map((skills, index) => <div
                            key={index}
                            className='badge badge-outline'>{skills}</div>)
                    }
                    
                </div>
                <div className='card-action justify-end'>
                    <Link to={`/jobs/${_id}`} className='btn btn-primary'>Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;