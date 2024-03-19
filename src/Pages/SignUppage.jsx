import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, createTheme, ThemeProvider } from '@mui/material';
import '../Style/Contactus.css';
import SignupImage from '../Assets/678.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUsForm = () => {
// Create a theme instance.
        const theme = createTheme({
          palette: {
            primary: {
              main: '#007bff', // Use your primary blue color here
            },
          },
          components: {
            MuiTextField: {
              styleOverrides: {
                root: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'blue', // Custom outline color
                      borderRadius: '8px', // Slightly rounded borders for the TextField
                    },
                    '&:hover fieldset': {
                      borderColor: 'darkblue', // Darker outline on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'blue', // Outline color when the TextField is focused
                    },
                  },
                },
              },
            },
          },
        });


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const { firstName, lastName, email, gender } = formData;
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = handleValidation();

    if (isValid) {
      try {
        const response = await fetch('http://localhost:3001/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('Form data successfully submitted!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            message: '',
          });
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
        toast.error('Failed to submit form!');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="contact-us-container">
        <div className="left-section">
          <img src={SignupImage} alt="Signup" className="signup-image" />
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-text">
            Contact us today and <span className="typing-text">experience the difference</span>
          </p>
        </div>
        <div className="right-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="text-fields">
              <TextField
                label="First Name *"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name *"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                fullWidth
                margin="normal"
              />
            </div>
            <TextField
              label="Email *"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              margin="normal"
            />
            <RadioGroup row value={formData.gender} onChange={handleInputChange} name="gender">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContactUsForm;
