import { ApplicantDetails } from "./Input-Side/logic/AboutUser";
import './Driver.css'
import { useState } from "react";
import { ApplicantDetailOutputs } from "./Output-Side/logic/ApplicantDetails";
import { ApplicantSkills } from "./Input-Side/logic/ApplicantSkills";
import { SkillField } from "./Output-Side/logic/ApplicantSkillField";
import { AddMultipleFields } from "./Input-Side/logic/AddMultipleFields";
import { RenderMultipleFields } from "./Output-Side/logic/RenderMultipleFields";
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
    const [startDate, setStartDate] = useState({})
    const [endDate, setEndDate] = useState({})

    const [prevExpInputs, setPrevExpInputs] = useState([])
    const [exps, setExps] = useState({})
    const [startDate_exp, setStartDate_exp] = useState({})
    const [endDate_exp, setEndDate_exp] = useState({})

    // For the qualification field

    const addQualification = (event, key) => {
        setQual((prevQual) => ({
            ...prevQual,
            [key]: event.target.value,
        }));
    };

    const addStartDate = (event, key) => {
        setStartDate((prevDates) => ({
            ...prevDates,
            [key]: event.target.value,
        }))
    }

    const addEndDate = (event, key) => {
        setEndDate((prevDates) => ({
            ...prevDates,
            [key]: event.target.value,
        }))
    }

    function addInputField() {
        let key = uuid();
        setInputs([...inputs, <div style={{ display: 'flex' }} key={key}><input onChange={(event) => addQualification(event, key)} />
            <input type="date" onChange={(event) => addStartDate(event, key)} />
            <input type="date" onChange={(event) => addEndDate(event, key)} />
        </div>]);
    }

    // For the "previous experience" field

    const addPrevExp = (event, key) => {
        setExps((prevQual) => ({
            ...prevQual,
            [key]: event.target.value,
        }));
    };

    const addStartDate_exp = (event, key) => {
        setStartDate_exp((prevDates) => ({
            ...prevDates,
            [key]: event.target.value,
        }))
    }

    const addEndDate_exp = (event, key) => {
        setEndDate_exp((prevDates) => ({
            ...prevDates,
            [key]: event.target.value,
        }))
    }

    function addExps() {
        let key = uuid();
        setPrevExpInputs([...prevExpInputs, <div style={{ display: 'flex' }} key={key}><input onChange={(event) => addPrevExp(event, key)} />
            <input type="date" onChange={(event) => addStartDate_exp(event, key)} />
            <input type="date" onChange={(event) => addEndDate_exp(event, key)} />
        </div>]);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td id="input-side-td">
                            <ApplicantDetails onChangeFn={onModifyingVal} />
                            <ApplicantSkills onChangeFn={onModifyingSkillField} />
                            <AddMultipleFields onClickFn={addInputField} inputs={inputs} buttonLabel="Add a Qualification" heading={'Enter your qualifications'} />
                            <AddMultipleFields onClickFn={addExps} inputs={prevExpInputs} buttonLabel="Add previous work experience" heading={'Enter any previous work experience'} />
                        </td>
                        <td id="output-side-td">
                            <div className="a4-cv">
                                <ApplicantDetailOutputs value={value} />
                                <SkillField skills={skill} />
                                <RenderMultipleFields qualifications={qual} startDates={startDate} endDates={endDate} header={'Qualifications'} />
                                <RenderMultipleFields qualifications={exps} startDates={startDate_exp} endDates={endDate_exp} header={'Work Experience'} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}