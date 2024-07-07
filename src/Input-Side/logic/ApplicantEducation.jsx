import '../styling/ApplicantEducation.css'

export function AddQualification({ onClickFn = null, inputs=null }) {

    return (
        <div>
            <label>Enter your educational qualification(s):- </label>
            <div><button id="add-qualification" onClick={onClickFn}>Enter a qualification</button></div>
            <div className='ed-field'>{inputs.map((fields)=>{return fields})}</div>
        </div>
    )
}