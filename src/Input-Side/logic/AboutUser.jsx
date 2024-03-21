import '../styling/AboutUser.css'

export function ApplicantDetails({onChangeFn = null} /*{ onChangeEmail = null, onChangeGH = null, onChangeLinkedIn = null, onChangePhoneNo = null, onChangeName = null }*/) {
    return (
        <>
            <div id='contact-details'>

                <div>
                    <label>Email ID: </label>
                    <input name='email' onChange={onChangeFn} /*onChange={onChangeEmail}*/ />
                </div>

                <div>
                    <label>GitHub Account: </label>
                    <input name='gh' onChange={onChangeFn} /*onChange={onChangeGH}*/ />
                </div>

                <div>
                    <label>LinkedIn: </label>
                    <input name='linkedin' onChange={onChangeFn} /*onChange={onChangeLinkedIn}*/ />
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input name='phoneNo' onChange={onChangeFn} /*onChange={onChangePhoneNo}*/ />
                </div>

                <label>Full Name: </label>
                <input name='fullname' onChange={onChangeFn} /*onChange={onChangeName}*/ />

            </div>
            {/* <hr className='line-break'></hr> */}
        </>
    )
}