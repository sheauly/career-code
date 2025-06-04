import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({MyApplicationsPromise}) => {
    const applications = use(MyApplicationsPromise)
    
    return (
        <div>
            <h3>Jobs Applied so far: {applications.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                   #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                        {
                            applications.map((application, index) => <JobApplicationRow
                                application={application}
                                key={application._id}
                                index = {index}
                            ></JobApplicationRow>)  
                       }
                      
                     
                   
                  
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;