import "./Form.css";

import TextField from "@mui/material/TextField";
import SubmitButton from "@mui/material/Button";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';

export default function Form() {
  return (
    <div className="form-wrapper">
      <section className="form">
        <form>
          <TextField id="username" label="Username" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
          <SubmitButton
            variant="contained"
            sx={{
              backgroundColor: "#002857",
            }}
          >
            Login
          </SubmitButton>
        </form>
      </section>
      <section className="content">
        <h1>Deevyashakti Enterprisis</h1>
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
