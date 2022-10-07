import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Prediction = () => {
  const [data, setData] = useState([]);

  const [customer_id, setcustomer_id] = useState("");
  const [account_length, setaccount_length] = useState("");
  const [location_code, setlocation_code] = useState("");
  const [international_plan, setinternational_plan] = useState("");
  const [voice_mail_plan, setvoice_mail_plan] = useState("");
  const [number_vm_messages, setnumber_vm_messages] = useState("");
  const [total_day_min, settotal_day_min] = useState("");
  const [total_day_calls, settotal_day_calls] = useState("");
  const [total_day_charge, settotal_day_charge] = useState("");
  const [total_eve_min, settotal_eve_min] = useState("");
  const [total_eve_calls, settotal_eve_calls] = useState("");
  const [total_eve_charge, settotal_eve_charge] = useState("");
  const [total_night_minutes, settotal_night_minutes] = useState("");
  const [total_night_calls, settotal_night_calls] = useState("");
  const [total_night_charge, settotal_night_charge] = useState("");
  const [total_intl_minutes, settotal_intl_minutes] = useState("");
  const [total_intl_calls, settotal_intl_calls] = useState("");
  const [total_intl_charge, settotal_intl_charge] = useState("");
  const [customer_service_calls, setcustomer_service_calls] = useState("");
  const [Churn, setChurn] = useState();

  const handlecustomer_id = (e) => {
    setcustomer_id(e.target.value);
  };

  const handleaccount_length = (e) => {
    setaccount_length(e.target.value);
  };

  const handlelocation_code = (e) => {
    setlocation_code(e.target.value);
  };

  const handleinternational_plan = (e) => {
    setinternational_plan(e.target.value);
  };

  const handlevoice_mail_plan = (e) => {
    setvoice_mail_plan(e.target.value);
  };

  const handlenumber_vm_messages = (e) => {
    setnumber_vm_messages(e.target.value);
  };

  const handletotal_day_min = (e) => {
    settotal_day_min(e.target.value);
  };

  const handletotal_day_calls = (e) => {
    settotal_day_calls(e.target.value);
  };

  const handletotal_day_charge = (e) => {
    settotal_day_charge(e.target.value);
  };

  const handletotal_eve_min = (e) => {
    settotal_eve_min(e.target.value);
  };

  const handletotal_eve_calls = (e) => {
    settotal_eve_calls(e.target.value);
  };

  const handletotal_eve_charge = (e) => {
    settotal_eve_charge(e.target.value);
  };

  const handletotal_night_minutes = (e) => {
    settotal_night_minutes(e.target.value);
  };

  const handletotal_night_calls = (e) => {
    settotal_night_calls(e.target.value);
  };

  const handletotal_night_charge = (e) => {
    settotal_night_charge(e.target.value);
  };

  const handletotal_intl_calls = (e) => {
    settotal_intl_calls(e.target.value);
  };

  const handletotal_intl_minutes = (e) => {
    settotal_intl_minutes(e.target.value);
  };

  const handletotal_intl_charge = (e) => {
    settotal_intl_charge(e.target.value);
  };

  const handlecustomer_service_calls = (e) => {
    setcustomer_service_calls(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      // customer_id: customer_id,
      account_length: account_length,
      location_code: location_code,
      intertiol_plan: international_plan,
      voice_mail_plan: voice_mail_plan,
      number_vm_messages: number_vm_messages,
      total_day_min: total_day_min,
      total_day_calls: total_day_calls,
      total_day_charge: total_day_charge,
      total_eve_min: total_eve_min,
      total_eve_calls: total_eve_calls,
      total_eve_charge: total_eve_charge,
      total_night_minutes: total_night_minutes,
      total_night_calls: total_night_calls,
      total_night_charge: total_night_charge,
      total_intl_minutes: total_intl_minutes,
      total_intl_calls: total_intl_calls,
      total_intl_charge: total_intl_charge,
      customer_service_calls: customer_service_calls,
    };

    console.log(payload);
    axios
      .post(`http://localhost:5000/predict/`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        console.log(res.data);
        setChurn(res.data.result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="row m-2 g-3" onSubmit={handleSubmit}>
      {Churn && (
        <div className="text-center bg-danger p-2 text-white h4">
          {Churn === "Yes" ? "Customer will churn" : "Customer won't churn"}
        </div>
      )}
      <div className="h3 pt-3 mt-3 text-center">
        Predict for a new customers
      </div>
      <div className="col-md-3">
        <label htmlFor="customer_id" className="form-label">
          Customer ID
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="customer_id"
          value={customer_id}
          onChange={handlecustomer_id}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="account_length" className="form-label">
          Account length
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="account_length"
          value={account_length}
          onChange={handleaccount_length}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="location_code" className="form-label">
          Location Code
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="location_code"
          value={location_code}
          onChange={handlelocation_code}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="voice_mail_plan" className="form-label">
          voice_mail_plan
        </label>
        <select
          required
          id="voice_mail_plan"
          className="form-select"
          value={voice_mail_plan}
          onChange={handlevoice_mail_plan}
        >
          <option value="" selected disabled hidden>Choose here</option>
          <option defaultChecked value="1">
            Yes
          </option>
          <option defaultChecked value="0">
            No
          </option>
        </select>
      </div>

      <div className="col-md-3">
        <label htmlFor="international_plan" className="form-label">
          international_plan
        </label>
        <select
          required
          id="international_plan"
          className="form-select"
          value={international_plan}
          onChange={handleinternational_plan}
        >
      <option value="" selected disabled hidden>Choose here</option>
          <option defaultChecked value="1">
            Yes
          </option>
          <option defaultChecked value="0">
            No
          </option>
        </select>
      </div>

      <div className="col-md-3">
        <label htmlFor="number_vm_messages" className="form-label">
        number_vm_messages
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="number_vm_messages"
          value={number_vm_messages}
          onChange={handlenumber_vm_messages}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_day_min" className="form-label">
          total_day_min
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_day_min"
          value={total_day_min}
          onChange={handletotal_day_min}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="total_day_calls" className="form-label">
          total_day_calls
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_day_calls"
          value={total_day_calls}
          onChange={handletotal_day_calls}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_day_charge" className="form-label">
          total_day_charge
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_day_charge"
          value={total_day_charge}
          onChange={handletotal_day_charge}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_eve_min" className="form-label">
          total_eve_min
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_eve_min"
          value={total_eve_min}
          onChange={handletotal_eve_min}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_eve_calls" className="form-label">
          total_eve_calls
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_eve_calls"
          value={total_eve_calls}
          onChange={handletotal_eve_calls}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_eve_charge" className="form-label">
          total_eve_charge
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_eve_charge"
          value={total_eve_charge}
          onChange={handletotal_eve_charge}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_night_minutes" className="form-label">
          total_night_minutes
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_night_minutes"
          value={total_night_minutes}
          onChange={handletotal_night_minutes}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_night_calls" className="form-label">
          total_night_calls
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_night_calls"
          value={total_night_calls}
          onChange={handletotal_night_calls}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_night_charge" className="form-label">
          total_night_charge
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_night_charge"
          value={total_night_charge}
          onChange={handletotal_night_charge}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_intl_minutes" className="form-label">
          total_intl_minutes
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_intl_minutes"
          value={total_intl_minutes}
          onChange={handletotal_intl_minutes}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_intl_calls" className="form-label">
          total_intl_calls
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_intl_calls"
          value={total_intl_calls}
          onChange={handletotal_intl_calls}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="total_intl_charge" className="form-label">
          total_intl_charge
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="total_intl_charge"
          value={total_intl_charge}
          onChange={handletotal_intl_charge}
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="customer_service_calls" className="form-label">
          customer_service_calls
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="customer_service_calls"
          value={customer_service_calls}
          onChange={handlecustomer_service_calls}
        />
      </div>

      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-outline-dark"
          // onSubmit={handleSubmit}
        >
          Predict
        </button>
      </div>
    </form>
  );
};

export default Prediction;
