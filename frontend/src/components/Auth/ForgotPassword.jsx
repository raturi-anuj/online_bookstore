import React, { useState, useEffect } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import logo from "../../assets/logo.png";
import "./Auth.css"; // Assuming you have a shared CSS file for Auth pages

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fetch the mobile number from the backend
  useEffect(() => {
    axios
      .get("/api/get-mobile-number") // Replace with actual endpoint
      .then((response) => {
        setMobileNumber(response.data.mobileNumber);
      })
      .catch((error) => {
        console.error("Error fetching mobile number:", error);
      });
  }, []);

  const handleSendOtp = () => {
    axios
      .post("/api/send-otp", { mobileNumber }) // Replace with actual endpoint
      .then((response) => {
        setOtpSent(true);
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleVerifyOtp = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("/api/verify-otp", { mobileNumber, otp, newPassword }) // Replace with actual endpoint
      .then((response) => {
        alert("Password reset successful!");
        window.location.href = "/signin"; // Redirect to sign-in page after successful reset
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        alert("Failed to reset password. Please try again.");
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "40px 20px", // Increased height by adding padding
        marginTop: "100px", // Position below navbar
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05)) 1",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <Box display="flex" justifyContent="center" mb={2}>
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      </Box>

      <Typography component="h1" variant="h5" align="center">
        Forgot Password
      </Typography>
      <form noValidate>
        {!otpSent ? (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="mobile"
              value={mobileNumber}
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
              disabled
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleSendOtp}
              style={{
                marginTop: "20px",
                backgroundColor: "#800080",
                color: "#fff",
                padding: "10px 0",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#DDA0DD")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#800080")}
            >
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="otp"
              label="Enter OTP"
              name="otp"
              autoComplete="off"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
              name="newPassword"
              label="New Password"
              type="password"
              id="newPassword"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleVerifyOtp}
              style={{
                marginTop: "20px",
                backgroundColor: "magenta",
                color: "#fff",
                padding: "10px 0",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d400d4")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "magenta")}
            >
              Verify OTP and Reset Password
            </Button>
          </>
        )}
      </form>
    </Container>
  );
};

export default ForgotPassword;
