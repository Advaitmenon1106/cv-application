import '../styling/ApplicantEducationDisplay.css'


export function ApplicantQualifications({ qualifications, dates }) {
    return (
        <div>
            <div className="headers">Education</div>
            <div>{Object.keys(qualifications).map((key) => {
                return <div key={key} className='education'>
                    <div className='qual'>{qualifications[key]}</div>
                    <div className='date'>{dates[key]}</div>
                </div>
            })}
            </div>
        </div>
    )
}