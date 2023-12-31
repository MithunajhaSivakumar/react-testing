import React from 'react'

export default function Application() {
  return (
    <>
    <h1>Job Application Form</h1>
    <h2>Section 1</h2>
    <p>All elements are mandatory</p>
    <span title='close'>X</span>
    <img src="https://hello.com" alt="Hello World" />
    <div data-testid='custom-element'>Custom HTML Element</div>
    <form>
        {/* // input type="text" and also textarea both have same role textbox */}
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Fullname' value='Mithunajha' onChange={()=>{}}/>
        </div>
        <div>
            <label htmlFor='bio'>Bio</label>
            <textarea id='bio' name='bio'/>
        </div>
        <div>
            <label htmlFor='job-location'>Name</label>
            <select id='job-location'>
                <option value="">Select a Country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
            </select>
        </div>
        <div>
            <label>
                <input type='checkbox' id="terms"/> I agree to terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>
    </>
  )
}
