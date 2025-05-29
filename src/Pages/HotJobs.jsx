import React, { use } from 'react';
import JobsCard from '../LayOut/Shared/JobsCard';

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);
    return (
        <div className=''>
            <h1 className='text-center text-3xl font-bold m-5'>Hot Jobs of The Day</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;