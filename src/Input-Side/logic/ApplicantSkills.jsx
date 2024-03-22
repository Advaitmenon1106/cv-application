export function ApplicantSkills({ onChangeFn = null }) {
    return (
        <div>
            <label>Your skillsets (comma separated) :-</label>
            <input type="text" onChange={onChangeFn}/>
        </div>
    )
}