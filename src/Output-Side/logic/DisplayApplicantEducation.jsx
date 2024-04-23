import '../styling/ApplicantEducationDisplay.css'


export function ApplicantQualifications({ qualifications }) {
    return (
        <div>
            <div className="headers">Education</div>
            <div>{Object.keys(qualifications).map((key) => { return <div key={key} className='education'>{qualifications[key]}</div> })}</div>
        </div>
    )
}