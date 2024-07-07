import '../styling/ApplicantEducationDisplay.css'


export function RenderMultipleFields({ qualifications, startDates, endDates, header }) {
    return (
        <div>
            <div className="headers">{header}</div>
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