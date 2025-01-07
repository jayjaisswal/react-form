import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Country: "",
    city: "",
    state: "",
    Zip: "",
    Offers: false,
    Comments: false,
    candidate: false,
    notification: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
   <div>
    <h1 className="heading">Registration Form</h1>
    
    <div className=" d-flex justify-content-center align-items-center ">
      
      <form className=" mt-3 m-3" onSubmit={submitHandler}>
        <div>
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <br />
          <input
            className="form-control"
            onChange={changeHandler}
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <br />
          <input
            className="form-control"
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            onChange={changeHandler}
            name="lastName"
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Enter email"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <br />

        <label className="form-label" htmlFor="Country">
          Country
        </label>
        <br />
        <div>
          <select
            className="form-select"
            name="Country"
            id="Country"
            onChange={changeHandler}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
            <option value="Russia">Russia</option>
            <option value="Thailand">Thailand</option>
          </select>
        </div>
        <br />
        <div>
          <label className="form-label" htmlFor="city">
            City
          </label>
          <br />
          <input
            className="form-control"
            id="city"
            placeholder="Enter City"
            type="text"
            onChange={changeHandler}
            name="city"
            value={formData.city}
          />
        </div>
        <br />
        <div>
          <label className="form-label" htmlFor="state">
            State/Province
          </label>
          <br />
          <input
            className="form-control"
            id="state"
            placeholder="State"
            type="text"
            name="state"
            onChange={changeHandler}
            value={formData.state}
          />
        </div>
        <br />
        <div>
          <label className="form-label" htmlFor="Zip">
            Zip/Postal Code
          </label>
          <br />
          <input
            className="form-control"
            id="Zip"
            placeholder="Zip"
            type="text"
            name="Zip"
            onChange={changeHandler}
            value={formData.Zip}
          />
        </div>
        <br />
        <fieldset className="border p-3 rounded">
          <legend className="float-none w-auto px-2  fw-bold">
            <span className="text-dark fw-semibold">By Email</span>
          </legend>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              name="Comments"
              id="Comments"
              onChange={changeHandler}
              checked={formData.Comments}
            />
            <label className="form-label" htmlFor="Comments">
              Comments
            </label>
            <br />
            <span className="text-muted">
              Get notified when someone posts a comment on a posting
            </span>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              name="candidate"
              id="candidate"
              checked={formData.candidate}
              onChange={changeHandler}
            />
            <label className="form-label" htmlFor="candidate">
              Candidate
            </label>
            <br />
            <span className="text-muted">
              Get notified when candidate applies for a job
            </span>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              name="Offers"
              id="Offers"
              checked={formData.Offers}
              onChange={changeHandler}
            />
            <label className="form-label" htmlFor="Offers">
              Offers
            </label>
            <br />

            <span className="text-muted">
              Get notified when candidate accept or reject the offer
            </span>
          </div>
        </fieldset>

        <br />
        <fieldset className="border p-3 rounded">
          <legend className="float-none w-auto px-2 fw-bold">
            <span>Push Notification</span>
          </legend>
          <span className="text-dark fw-semibold">
            These are delivered via sms to your phone
          </span>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="sms"
              onChange={changeHandler}
              value="send Everything"
              name="notification"
              checked={formData.notification == "send Everything"}
            />
            <label className="form-label" htmlFor="sms">
              Everything
            </label>
            <br />
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              id="mail"
              onChange={changeHandler}
              value="send Same as email"
              name="notification"
              checked={formData.notification == "send Same as email"}
            />
            <label className="form-label" htmlFor="mail">
              Same as email
            </label>
            <br />
          </div>

          <div>
            <input
              className="form-check-input"
              type="radio"
              id="push"
              onChange={changeHandler}
              value="No Push Notification"
              name="notification"
              checked={formData.notification == "No Push Notification"}
            />
            <label className="form-label" htmlFor="push">
              No Push Notification
            </label>
            <br />
          </div>
        </fieldset>
        <button className="btn btn-primary">save</button>
      </form>
    </div>
    </div>
  );
}

export default App;
