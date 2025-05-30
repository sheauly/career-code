import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();

    console.log(jobId, user)

    const handleForSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);

        const application = {
            jobId,
            application: user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h3 className='text-4xl'>Apply For This Job: <Link to={`/jobs/${jobId}`}>Details</Link></h3>
            <form onSubmit={handleForSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input name="linkedIn" type="url" className="input input-bordered w-full" placeholder="My awesome page" />

                    <label  className="label">Ghithub Link</label>
                    <input name="github" type="url" className="input" placeholder="my-awesome-page" />

                    <label className="label">Resume Link</label>
                    <input name='resume' type="url" className="input" placeholder="Name" />

                    <input type="submit" className='btn btn-primary' value="Apply" />
                </fieldset>

            </form>
        </div>
    );
};

export default JobApply;