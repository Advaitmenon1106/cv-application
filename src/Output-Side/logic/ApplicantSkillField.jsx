import '../styling/ApplicantSkills.css'

export function SkillField({ skills }) {
    return (
        <div>
            <div className="heading">Skills</div>
            <div id="skill-set">{skills}</div>
        </div>
    )
}