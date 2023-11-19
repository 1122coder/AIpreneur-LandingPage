import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../Style/PopupComponent.css'; // Import CSS file for styling
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopupComponent = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // Display the popup after 7 seconds
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false); // Close the popup
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowPopup(false); // Close the popup on successful submission
        toast.success('Email sent successfully!');
      } else {
        toast.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error sending email');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <div className="popup-header">Subscribe to Prompt ideas for free</div>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupComponent;
