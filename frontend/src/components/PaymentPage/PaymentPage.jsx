import React, { useState } from 'react';
import { TextField, Button, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState({
    buildingName: '',
    locality: '',
    city: '',
    state: '',
    pinCode: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Payment Method: ", paymentMethod);
    console.log("Address: ", address);
    // Add further logic such as form validation, API call, etc.
  };

  return (
    <Box className="payment-container">
      <Typography variant="h4" className="payment-title">Payment</Typography>
      <form className="payment-form">
        <TextField
          label="Building Name"
          name="buildingName"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address.buildingName}
          onChange={handleAddressChange}
        />
        <TextField
          label="Locality"
          name="locality"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address.locality}
          onChange={handleAddressChange}
        />
        <TextField
          label="City"
          name="city"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address.city}
          onChange={handleAddressChange}
        />
        <TextField
          label="State"
          name="state"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address.state}
          onChange={handleAddressChange}
        />
        <TextField
          label="Pin Code"
          name="pinCode"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address.pinCode}
          onChange={handleAddressChange}
        />

        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange} className="payment-options">
          <FormControlLabel value="card" control={<Radio />} label="Card Payment" />
          <FormControlLabel value="upi" control={<Radio />} label="UPI Payment" />
          <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
        </RadioGroup>

        <Button variant="contained" color="primary" className="payment-button" onClick={handleSubmit}>
          Complete Payment
        </Button>
      </form>
    </Box>
  );
};

export default PaymentPage;
