import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise)
    console.log(jobs)
    return (
        <div>
            <h2>Jobs created by You: {jobs.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>seriol</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            jobs.map((job, index) =>
                                <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>{job.name}</td>
                                    <td>{job.date}</td>
                                    <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;