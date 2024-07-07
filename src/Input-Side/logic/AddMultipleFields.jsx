import '../styling/ApplicantEducation.css'

export function AddMultipleFields({ onClickFn = null, inputs=null, buttonLabel='' , heading}) {

    return (
        <div>
            <label>{heading}</label>
            <div><button id="add-qualification" onClick={onClickFn}>{buttonLabel}</button></div>
            <div className='fields'>{inputs.map((fields)=>{return fields})}</div>
        </div>
    )
}