import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, createTheme, ThemeProvider, Grid } from '@mui/material';
import '../Style/Contactus.css'; // Ensure your CSS file is updated as mentioned
import SignupImage from '../Assets/contactus.jpeg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, push } from 'firebase/database';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    background: {
      default: '#EEEEEE',
    },
    text: {
      primary: '#000000', // Text color changed for better contrast
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          style: { color: '#000' }, // Label color to black
        },
        InputProps: {
          style: { color: '#000' }, // Input text color to black
        },
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)', // Adjusted for visibility
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)', // Adjusted for visibility
            },
            '&.Mui-focused fieldset': {
              borderColor: '#007bff', // Maintaining brand color for focus
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000000', // Adjusted for better contrast
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjusted for subtle effect
          },
        },
      },
    },
  },
});

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = handleValidation();

    if (isValid) {
      try {
        await push(ref(getDatabase(), 'contactUsForms'), formData);
        toast.success('Form data successfully submitted!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          message: '',
        });
      } catch (error) {
        console.error('Error submitting form to Firebase:', error.message);
        toast.error('Failed to submit form!');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <div style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '60px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={SignupImage} alt="Contact Us" className="signup-image" />
            <h1>Contact Us</h1>
            <p>Contact us today and experience the difference.</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField label="First Name *" variant="outlined" name="firstName" value={formData.firstName} onChange={handleInputChange} error={!!errors.firstName} helperText={errors.firstName} fullWidth margin="normal" />
              <TextField label="Last Name *" variant="outlined" name="lastName" value={formData.lastName} onChange={handleInputChange} error={!!errors.lastName} helperText={errors.lastName} fullWidth margin="normal" />
              <TextField label="Email *" variant="outlined" name="email" value={formData.email} onChange={handleInputChange} error={!!errors.email} helperText={errors.email} fullWidth margin="normal" />
              <RadioGroup row value={formData.gender} onChange={handleInputChange} name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
              <TextField label="Message" variant="outlined" multiline rows={4} name="message" value={formData.message} onChange={handleInputChange} fullWidth margin="normal" />
              <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default ContactUsForm;
