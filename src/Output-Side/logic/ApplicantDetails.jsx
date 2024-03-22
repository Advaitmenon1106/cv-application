import '../styling/ApplicantDetails.css'

export function ApplicantDetailOutputs({ value }) {
    return (
        <div className="small-font-details">
            <div>{value['email']}</div>
            <div>{value['gh']}</div>
            <div>{value['linkedin']}</div>
            <div>{value['phoneNo']}</div>
            <div id='applicant-name'>{value['fullname']}</div>
        </div>
    )
}