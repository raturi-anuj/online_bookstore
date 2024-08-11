import React, { useState } from "react";
import { Button, TextField, Container, Typography, Box, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import white_logo from "../../assets/white_logo.png";
import "./Auth.css"; // Assuming you have a shared CSS file for Auth pages

const SignUp = () => {
  const [accountCreated, setAccountCreated] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    // Add your sign-up logic here. If successful:
    setAccountCreated(true);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      height="95%"
      style={{
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "60px 20px", // Increased height by adding padding
        marginTop: "100px", // Position below navbar
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05)) 1",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <Box display="flex" justifyContent="center" mb={2}>
        <img src={white_logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      </Box>

      <Typography component="h1" variant="h5" align="center">
        Sign Up
      </Typography>

      {accountCreated && (
        <Alert severity="success" style={{ marginTop: "20px" }}>
          Account successfully created! Please <Link to="/signin">Sign In</Link>.
        </Alert>
      )}

      <form noValidate onSubmit={handleSignUp}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          size="small"
          style={{
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            borderRadius: "4px",
            opacity: 0.8,
            transition: "all 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.opacity = 1)}
          onBlur={(e) => (e.target.style.opacity = 0.8)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          size="small"
          style={{
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            borderRadius: "4px",
            opacity: 0.8,
            transition: "all 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.opacity = 1)}
          onBlur={(e) => (e.target.style.opacity = 0.8)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            marginTop: "20px",
            backgroundColor: "#800080",
            color: "#fff",
            padding: "10px 0",
            borderRadius: "4px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            size: "small",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#DDA0DD")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#800080")}
        >
          Sign Up
        </Button>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Link
            to="/signin"
            className="link"
          >
            Already have an account? Sign In
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default SignUp;