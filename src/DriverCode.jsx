import { ApplicantDetails } from "./Input-Side/logic/AboutUser";
import './Driver.css'
import { useState } from "react";

export function Consortium() {
    // define a state here for input values

    const [displayEmail, changeDisplayEmail] = useState('');
    const [displayGH, changeDisplayGH] = useState('');
    const [displayLinkedin, changeDisplayLinkedin] = useState('');
    const [displayPhoneNo, changeDisplayPhoneNo] = useState('');
    const [displayName, changeDisplayName] = useState('');


    const onModifyingEmail = (event) => {
        changeDisplayEmail(event.target.value);
    }
    const onModifyingGH = (event) => {
        changeDisplayGH(event.target.value);
    }
    const onModifyingLinkedIn = (event) => {
        changeDisplayLinkedin(event.target.value);
    }
    const onModifyingPhoneNo = (event) => {
        changeDisplayPhoneNo(event.target.value);
    }
    const onModifyingName = (event) => {
        changeDisplayName(event.target.value);
    }
    //Use display as a display value when the div for name etc is created

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td id="input-side-td"><ApplicantDetails onChangeEmail={onModifyingEmail} onChangeGH={onModifyingGH} onChangeLinkedIn={onModifyingLinkedIn} onChangePhoneNo={onModifyingPhoneNo} onChangeName={onModifyingName} /></td>
                        <td>
                            <div>{displayEmail}</div>
                            <div>{displayGH}</div>
                            <div>{displayLinkedin}</div>
                            <div>{displayPhoneNo}</div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}