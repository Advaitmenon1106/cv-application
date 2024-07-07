import '../styling/ApplicantEducationDisplay.css'


export function ApplicantQualifications({ qualifications, startDates, endDates }) {
    return (
        <div>
            <div className="headers">Education</div>
            <div>{Object.keys(qualifications).map((key) => {
                return <div key={key} className='education'>
                    <div className='qual'>{qualifications[key]}</div>
                    <div className='date'>{startDates[key]}</div>
                    <div className='date'>{endDates[key]}</div>
                </div>
            })}
            </div>
        </div>
    )
}