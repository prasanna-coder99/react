import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function PasswordStep() {
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [agreeError, setAgreeError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    setPasswordError("");
    setAgreeError("");
    setSuccessMessage("");

    if (!password) {
      setPasswordError("Please enter a valid password");
      return;
    }
    const passwordPattern = /^(?=.*[0-9]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 6 characters & include a number");
      return;
    }
    if (!agree) {
      setAgreeError("You must agree Terms & Conditions");
      return;
    }

    setSuccessMessage("Login successful");
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .custom-password-input:focus {
            box-shadow: none !important;
            border-color: #ced4da !important;
          }
          .custom-password-input::placeholder {
            color: #999;
            opacity: 1; /* For Firefox */
          }
          .custom-password-input::-ms-reveal, 
          .custom-password-input::-ms-clear {
            display: none;
          }
        `}
      </style>
      <div
        className="d-flex flex-column align-items-center vh-100"
        style={{
          backgroundImage: `url("/bgimg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          padding: '0 16px',
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
            marginBottom: '30px',
          }}>
            Cloud System
          </h1>
          <p className="text-center" style={{
            marginBottom: '16px',
            color: '#0A1E06',
           
            fontSize: '16px',
            fontWeight: 400,
          }}>
            Please enter your password
          </p>
        <div className="d-flex align-items-center w-100 mb-2" style={{ maxWidth: '400px' }}>
        <button
          className="btn"
          onClick={handleBack}
          style={{
          padding: 0,
          marginRight: '8px',
          width: '30px',
          height: '30px',
          display: 'flex',
          justifyContent: 'center',
         alignItems: 'center',
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" rx="15" fill="white" />
      <path d="M8.64645 14.6464C8.45118 14.8417 8.45118 15.1583 8.64645 15.3536L11.8284 18.5355C12.0237 18.7308 12.3403 18.7308 12.5355 18.5355C12.7308 18.3403 12.7308 18.0237 12.5355 17.8284L9.70711 15L12.5355 12.1716C12.7308 11.9763 12.7308 11.6597 12.5355 11.4645C12.3403 11.2692 12.0237 11.2692 11.8284 11.4645L8.64645 14.6464ZM21 15L21 14.5L9 14.5L9 15L9 15.5L21 15.5L21 15Z" fill="#4C33DB" />
    </svg>
  </button>

  <div
    className="d-flex align-items-center flex-grow-1"
    style={{
      width:'100px',
      height: '56px',
      backgroundColor: '#fff',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      padding: '0 16px',
    }}
  >
    <input
      type={showPassword ? "text" : "password"}
      className="form-control custom-password-input"
      placeholder="Password"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        setPasswordError("");
      }}
      style={{
        border: 'none',
        height: '100%',
        backgroundColor: 'transparent',
        outline: 'none',
        boxShadow: 'none',
        fontSize: '16px',
        flex:1,
      }}
    />
    <button
      className="btn"
      onClick={() => setShowPassword(!showPassword)}
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 14.9999 12 14.9999C12.7956 14.9999 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" fill="#6F6F6F" />
      </svg>
    </button>
  </div>
</div>
<p style={{
            fontSize: '15px',
            color: '#0A1E06',
            cursor: 'pointer',
           
            fontWeight: 400,
            lineHeight: '100%',
            letterSpacing: '0.26px',
            alignSelf: 'center',
            textAlign:'center',
            marginBottom: '16px',
            marginLeft:'16px',
          }}>
            Forgot Password?
          </p>

          <div className="d-flex justify-content-center w-100" style={{ marginBottom: '16px' }}>
            <div className="form-check" style={{ maxWidth: '400px' }}>
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeCheckbox"
                checked={agree}
                onChange={(e) => {
                  setAgree(e.target.checked);
                  if (e.target.checked) setAgreeError("");
                }}
                style={{ float: 'none', marginLeft: '4px', marginRight: '8px' }}
            />
            <label className="form-check-label" htmlFor="agreeCheckbox" style={{
                color: '#0A1E06',
                
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '0.26px',
                display: 'inline-flex',
                alignItems: 'center',
              }}>
                I agree to <a href="#" style={{
                  color: '#0A1E06',
           
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '0.26px',
                  textDecorationLine: "underline",
                  marginLeft: '6px',
                }}>Terms and Conditions</a>
              </label>
            </div>
          </div>

          {passwordError && (
            <p className="text-danger text-center" style={{
              fontSize: '15px',
              marginTop: '1px',
              marginBottom:'1px',
              width: '100%',
              maxWidth: '400px',
              alignItems:'center',
            }}>
              {passwordError}
            </p>
          )}
          {agreeError && (
            <p className="text-danger text-center" style={{
              fontSize: '15px',
              marginTop: '8px',
              marginBottom: '8px',
              width: '100%',
              maxWidth: '400px',
              alignItems:'center',
              marginLeft:'20px',
            }}>
              {agreeError}
            </p>
          )}
          {successMessage && (
            <p className="text-success text-center" style={{
              fontSize: '14px',
              marginTop: '8px',
              marginBottom: '8px',
              width: '100%',
              maxWidth: '400px'
            }}>
              {successMessage}
            </p>
          )}

          <button
            className="btn btn-primary rounded-pill"
            style={{
              width: '100px',
              height: '36px',
              backgroundColor: '#664ad6ff',
              border: 'none',
              
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '16px'
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default PasswordStep;