import axios from "axios";
import { useState } from "react";
//Typography
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export const Create = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/data", form).then(() => {
      alert("New Pet Data Created Successfully!");
      navigate("/");
      console.log(form);
    });
  };
  return (
    <>
      <Typography
        variant="h6"
        color="secondary"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Create New Pet
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="create_div"
        style={{
          border: "1px solid teal",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
          margin: "10px auto",
        }}
      >
        <label htmlFor="name">Enter Pet Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Pet Name"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="city">Enter City: </label>
        <input
          type="text"
          id="city"
          placeholder="Enter City Name"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">Enter Address: </label>
        <input
          type="text"
          id="address"
          placeholder="Enter Address"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="capacity">Enter Capacity: </label>
        <input
          type="text"
          id="capacity"
          placeholder="enter capacity"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="cost">Enter Cost: </label>
        <input
          type="number"
          id="cost"
          placeholder="enter cost"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="selectVerify">Verified: </label>
        <select name="" id="selectVerify" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <label htmlFor="rating">Give Rating: </label>
        <input
          type="text"
          id="rating"
          placeholder="enter rating"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="Accepted_Pet_type">Accepted Pet type: </label>
        <select name="" id="Accepted_Pet_type" onChange={handleChange}>
          <br />
          <option value="">Select Pet</option>
          <option value="Dog">Dog</option>
          <option value="Cats">Cats</option>
          <option value="Rabbits">Rabbits</option>
        </select>
        <br />
        <label htmlFor="Accepted_Pet_size">Accepted Pet size</label>
        <select name="" id="Accepted_Pet_size" onChange={handleChange}>
          <br />
          <option value="">Select Weight</option>
          <option value="1-5kg">1-5kg</option>
          <option value="5-10kg">5-10kg</option>
          <option value="10-20kg">10-20kg</option>
          <option value="20-40kg">20-40kg</option>
          <option value="40+kg">40+kg</option>
        </select>
        <br />
        <label htmlFor="adult_supervision">Level of adult supervision: </label>
        <select name="" id="adult_supervision" onChange={handleChange}>
          <br />
          <option value="yes">Select</option>
          <option value="Pets will never be left unattended">
            Pets will never be left unattended
          </option>
          {/* <option value="The place your pet will be if they are left unsupervised at home">
                The place your pet will be if they are left unsupervised at home
              </option> */}
          <option value="Free roam of the house">Free roam of the house</option>
        </select>
        <br />
        <label htmlFor="sleep_place">Place of sleep: </label>
        <select name="" id="sleep_place" onChange={handleChange}>
          <br />
          <option value="">Sleep Place</option>
          <option value="Wherever they want">Wherever they want</option>
          <option value="Need some specific place">
            Need some specific place
          </option>
        </select>
        <br />
        <label htmlFor="potty">Number of potty per day: </label>
        <input
          type="number"
          id="potty"
          min={1}
          max={6}
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="walks">Number of Walks per day: </label>
        <input
          type="number"
          id="walks"
          min={1}
          max={6}
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="type_of_home">Type of Home : </label>
        <select name="" id="type_of_home" required onChange={handleChange}>
          <option value="">Select</option>
          <option value="">House</option>
          <option value="">Apartment</option>
        </select>
        <br />
        <label htmlFor="outdoor_size">Outdoor Area Size Required : </label>
        <select name="" id="outdoor_size" required onChange={handleChange}>
          <option value="">Select</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <br />
        <label htmlFor="transport">Emergency transport : </label>
        <select name="" id="transport" required onChange={handleChange}>
          <option value="">Select Choice</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <input
          type="submit"
          value={"Submit"}
          style={{
            backgroundColor: "teal",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
          }}
        />
        {/* <Button variant="contained" onClick={() => handleSubmit()} color="error" value={"Submit"} size="small"> */}
        {/* </Button> */}
      </form>
    </>
  );
};
