import "./Form.css";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import SubmitButton from "@mui/material/Button";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form-wrapper">
      <section className="form-sec">
        <form
          className="form"
          onSubmit={(event) => {
            if (username == "admin" && password == "juit") {
              event.preventDefault();
              window.location.href =
                "https://manik2375.github.io/Hospital_Management_App/";
            } else {
              alert("The username/password in wrong!");
              return;
            }
          }}
        >
          <TextField
            required
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
          <SubmitButton
            variant="contained"
            sx={{
              backgroundColor: "#002857",
            }}
            type="submit"
          >
            Login
          </SubmitButton>
        </form>
      </section>
      <section className="content">
        <h1>Dheeshakti</h1>
        <p>
          Hospitals are essential institutions providing medical care, emergency
          services, and specialized treatments to improve patient health and
          well-being in communities worldwide.
        </p>
        <div className="icons-container">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
      </section>
    </div>
  );
}
