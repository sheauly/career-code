export const MyApplicationsPromise = email => {

    return fetch(`http://localhost:3000/applications?email=${email}`)
        .then(res => res.json())
        // .then(data => {
        //     console.log('ApplicationList', data)
        // })
}