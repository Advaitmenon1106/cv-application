import '../styling/ApplicantSkills.css'

export function SkillField({ skills }) {
    return (
        <div>
            <div className="headers">Skills</div>
            <div id="skill-set">{skills}</div>
        </div>
    )
}