import { ApplicantDetails } from "./Input-Side/logic/AboutUser";
import './Driver.css'
import { useState } from "react";
import { ApplicantDetailOutputs } from "./Output-Side/logic/ApplicantDetails";
import { ApplicantSkills } from "./Input-Side/logic/ApplicantSkills";
import { SkillField } from "./Output-Side/logic/ApplicantSkillField";
import { AddQualification } from "./Input-Side/logic/ApplicantEducation";
import { ApplicantQualifications } from "./Output-Side/logic/DisplayApplicantEducation";
import { v4 as uuid } from 'uuid';

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

    const [inputs, setInputs] = useState([]);
    const [qual, setQual] = useState({})


    function addInputField() {
        let key = uuid();
        setInputs([...inputs, <div key={key}><input onChange={(event) => addQualification(event, key)} /></div>]);
        // setQual({...qual, key:<div key={key} className='education'></div>}) // This does not work but I might need to trigger a render here 
    }

    const addQualification = (event, key) => {
        setQual((prevQual) => ({
          ...prevQual,
          [key]: event.target.value,
        }));
      };

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td id="input-side-td">
                            <ApplicantDetails onChangeFn={onModifyingVal} />
                            <ApplicantSkills onChangeFn={onModifyingSkillField} />
                            <AddQualification onClickFn={addInputField} inputs={inputs} />
                        </td>
                        <td id="output-side-td">
                            <div className="a4-cv">
                                <ApplicantDetailOutputs value={value} />
                                <SkillField skills={skill} />
                                <ApplicantQualifications qualifications={qual} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}