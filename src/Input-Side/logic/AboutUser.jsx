import '../styling/AboutUser.css'

export function ApplicantDetails({ onChangeFn = null }) {
    return (
        <>
            <div id='contact-details'>

                <div>
                    <label>Email ID: </label>
                    <input name='email' type='email' onChange={onChangeFn} />
                    {/* <input type='color' /> */}
                </div>

                <div>
                    <label>GitHub Account: </label>
                    <input name='gh' onChange={onChangeFn} />
                </div>

                <div>
                    <label>LinkedIn: </label>
                    <input name='linkedin' onChange={onChangeFn} />
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input name='phoneNo' type='number' id='phone-number' onChange={onChangeFn} />
                </div>

                <label>Full Name: </label>
                <input name='fullname' onChange={onChangeFn} />

            </div>
        </>
    )
}