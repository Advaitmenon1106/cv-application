import { ApplicantDetails } from "./Input-Side/logic/AboutUser";
import './Driver.css'
import { useState } from "react";

export function Consortium() {
    const [value, setValue] = useState({
        'email': '',
        'gh': '',
        'linkedin': '',
        'phoneNo': '',
        'fullname': ''
    });


    const onModifyingVal = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td id="input-side-td"> <ApplicantDetails onChangeFn={onModifyingVal} /> </td>
                        <td>
                            <div>{value['email']}</div>
                            <div>{value['gh']}</div>
                            <div>{value['linkedin']}</div>
                            <div>{value['phoneNo']}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}