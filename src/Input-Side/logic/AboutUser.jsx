import '../styling/AboutUser.css'

export function ApplicantDetails({ onChangeEmail = null, onChangeGH = null, onChangeLinkedIn = null, onChangePhoneNo = null, onChangeName = null }) {
    return (
        <>
            <div id='contact-details'>

                <div>
                    <label>Email ID: </label>
                    <input onChange={onChangeEmail} />
                </div>

                <div>
                    <label>GitHub Account: </label>
                    <input onChange={onChangeGH} />
                </div>

                <div>
                    <label>LinkedIn: </label>
                    <input onChange={onChangeLinkedIn} />
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input onChange={onChangePhoneNo} />
                </div>

                <label>Full Name: </label>
                <input onChange={onChangeName} />

            </div>
            {/* <hr className='line-break'></hr> */}
        </>
    )
}