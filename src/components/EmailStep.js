import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function EmailStep() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const handleNext = async (e) => {
      e.preventDefault();
      setError("");
       
   
    if (!email) {
      setError("Please enter email address");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please Enter a valid email address");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://e6f2c7d56ba3.ngrok-free.app/api/check_email",
        { email }
      );
    console.log("API response:", response.data); 
    if (response.data.exists) {
        localStorage.setItem("email", email);
       sessionStorage.setItem("passwordEntered", "true");
         console.log("Navigating to password page");
        navigate("/password");

      } else {
        setError("Email not found");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Unable to verify email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (

<div 
      className="d-flex flex-column align-items-center vh-100"
      style={{
        backgroundImage: `url("/bgimg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        padding: '0 16px',
        width:'100%',
        minWidth:0,
        minHeight:0,
      }}
    >
      <div 
        className="d-flex flex-column align-items-center"
        style={{ width: '100%', maxWidth: '400px', marginTop: '100px' }} 
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="rounded-circle"
          style={{ width: '40px', height: '40px', marginBottom: '100px' }}
        />
        
        <h1 className="text-center" style={{ 
          color: '#0A1E06', 
          fontSize: '31px',
          fontWeight:600,
          marginBottom:'40px',
          
        }}>
          Cloud System
        </h1>

        <p className="text-center" style={{ 
          color: '#0A1E06',
          fontSize: '16px',
          fontWeight:300,
          gap:'49px',
        }}>
          Please enter your registered Email to Login
        </p>
       
        <div 
          className="d-flex align-items-center" 
          style={{ 
            width: '100%',
            height: '56px',
            backgroundColor: '#fff',
            borderRadius: '6px',
            border: '1px solid #ced4da',
            padding: '0 16px',
            marginBottom: '16px' 
          }}
        >
          <input
            type="email"
            className="form-control custom-email-input"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            style={{ 
              border: 'none',
              height: '100%',
              backgroundColor: 'transparent',
              outline: 'none',
              boxShadow: 'none',
              fontSize: '16px'
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke="#525252"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="#525252"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {error && (
          <p className="text-danger text-center" style={{ 
            fontSize: '15px',
            marginBottom: '16px' 
          }}>
            {error}
          </p>
        )}

        <button
        type='button'
        onClick={handleNext} 
        disabled={loading}
          className="btn btn-primary rounded-pill mt-3"
          style={{
            width: '100px',
            height: '36px',
            backgroundColor: '#664ad6ff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
         >
  {loading ? "Checking..." : "Next"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="ms-1"
          >
            <path
              d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.625 9H15.2475"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

  );
}

export default EmailStep;