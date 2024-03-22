import { ApplicantDetails } from "./Input-Side/logic/AboutUser";
import './Driver.css'
import { useState } from "react";
import { ApplicantDetailOutputs } from "./Output-Side/logic/ApplicantDetails";
import { ApplicantSkills } from "./Input-Side/logic/ApplicantSkills";
import { SkillField } from "./Output-Side/logic/ApplicantSkillField";

export function Consortium() {
    const [value, setValue] = useState({
        'email': '',
        'gh': '',
        'linkedin': '',
        'phoneNo': '',
        'fullname': ''
    });

    const [skill, setSkillValue] = useState('');


    const onModifyingVal = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }

    const onModifyingSkillField = (event) => {
        setSkillValue(event.target.value);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td id="input-side-td">
                            <ApplicantDetails onChangeFn={onModifyingVal} />
                            <ApplicantSkills onChangeFn={onModifyingSkillField} />
                        </td>
                        <td id="output-side-td">
                            <div className="a4-cv">
                                <ApplicantDetailOutputs value={value} />
                                <SkillField skills={skill}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}