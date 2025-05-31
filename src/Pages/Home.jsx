import React, { Suspense } from 'react';
import Banner from './Banner';
import Card from './Card';
import HotJobs from './HotJobs';
const jobsPromise = fetch("http://localhost:3000/jobs").then(res => res.json())
const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Suspense fallback= {<p>loading...</p>}><HotJobs jobsPromise={jobsPromise}></HotJobs></Suspense>
         
        </div>
    );
};

export default Home;