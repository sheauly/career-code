import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../hooks/useAuth';
import { MyApplicationsPromise } from '../api/applicationApi';


const MyApplications = () => {
    const { user } = useAuth();
    console.log(user.email)
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                
                <ApplicationList
                    MyApplicationsPromise={MyApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
           
        </div>
    );
};

export default MyApplications;