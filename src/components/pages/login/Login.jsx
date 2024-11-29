import { useRef, useState } from "react";
import "./login.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useActivateUserMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../../features/api/userSlice";
import { useSelector } from "react-redux";
const Login = () => {
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [showLogin, setShowLogin] = useState(true);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [activateUser, { isLoading: activateLoading }] =
    useActivateUserMutation();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();

  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    loginEmail: "",
    loginPassword: "",
    signupFullName: "",
    signupEmail: "",
    signupPassword: "",
  });

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) {
      newErrors.loginEmail = "Email is required";
    }
    if (!loginData.password) {
      newErrors.loginPassword = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.fullName) {
      newErrors.signupFullName = "Full name is required";
    }
    if (!signupData.email) {
      newErrors.signupEmail = "Email is required";
    }
    if (!signupData.password) {
      newErrors.signupPassword = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (value.match(/[0-9]/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }

    if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleOTPSubmit = async () => {
    if (!token) {
      toast.error("Activation token not found.");
      return;
    }

    const activationCode = otp.join("");

    if (activationCode.length !== 4) {
      toast.error("OTP should be 4 digits.");
      return;
    }

    if (activateLoading) {
      toast.info("Verifying OTP...");
    }

    try {
      const response = await activateUser({
        activation_token: token,
        activation_code: activationCode,
      }).unwrap();

      console.log(response);

      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error("Error during OTP verification:", err);
      toast.error("Something went wrong, please try again!");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      try {
        // Trigger login mutation
        const { data } = await loginUser({
          email: loginData.email,
          password: loginData.password,
        });

        if (data.success) {
          toast.success(data.message);
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        console.error("Error during login:", err);
        toast.error(
          err.response?.data?.message ||
            "Something went wrong, please try again!"
        );
      }
    }
  };
  const closeOtpModal = () => {
    setIsOtpModalOpen(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (validateSignup()) {
      try {
        const response = await registerUser({
          name: signupData.fullName,
          email: signupData.email,
          password: signupData.password,
        }).unwrap();

        if (response.success) {
          toast.success(response.message);
          setIsOtpModalOpen(true);
          localStorage.setItem("activation_token", response.activationToken);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Something went wrong, please try again!");
      }
    }
  };
  return (
    <div>
      {isOtpModalOpen && (
        <div id="otpModal" className="modal-otp">
          <div className="modal-content-otp">
            <span
              className="close-button-otp"
              id="closeModal"
              onClick={closeOtpModal}
            >
              &times;
            </span>
            <h2 style={{ marginBottom: "20px" }}>Enter OTP</h2>
            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <button
              id="verifyOtpButton"
              style={{ outline: "none" }}
              onClick={handleOTPSubmit}
              disabled={isLoading}
            >
              {activateLoading ? (
                <span className="loader"></span>
              ) : (
                <span id="verifyButtonText">Verify OTP</span>
              )}
            </button>
            <div id="otpError" className="error-message"></div>
          </div>
        </div>
      )}

      {/* Background */}
      <div className="login-page">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Main Container */}
        <div className="container-login" id="container">
          {showLogin ? (
            <div className="form-container-login" id="login-form">
              <div className="logo-container">
                <img src="image/logonew.png" alt="Logo" className="logo" />
              </div>
              <h1 className="login-header">Codexus Labs</h1>
              <h1>Welcome Back</h1>
              <form id="loginForm" onSubmit={handleLoginSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  id="loginEmail"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                {errors.loginEmail && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.loginEmail}
                  </span>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  id="loginPassword"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                {errors.loginPassword && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.loginPassword}
                  </span>
                )}
                <button type="submit" style={{ outline: "none" }}>
                  {loginLoading ? (
                    <span className="loader"></span>
                  ) : (
                    <span id="signupButtonText">Log In</span>
                  )}
                </button>
              </form>
              <div className="toggle-form-login">
                New here?{" "}
                <a href="#" id="show-signup" onClick={toggleForm}>
                  Create an account
                </a>
              </div>
            </div>
          ) : (
            <div className="form-container-login" id="signup-form">
              <div className="logo-container">
                <img src="image/logonew.png" alt="Logo" className="logo" />
              </div>
              <h1 className="login-header">Codexus Labs</h1>
              <h1>Join Us</h1>
              <form id="signupForm" onSubmit={handleSignupSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                  value={signupData.fullName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, fullName: e.target.value })
                  }
                />
                {errors.signupFullName && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.signupFullName}
                  </span>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  id="signupEmail"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
                {errors.signupEmail && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.signupEmail}
                  </span>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  id="signupPassword"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
                {errors.signupPassword && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.signupPassword}
                  </span>
                )}
                <button type="submit" style={{ outline: "none" }}>
                  {isLoading ? (
                    <span className="loader"></span>
                  ) : (
                    <span id="signupButtonText">Sign Up</span>
                  )}
                </button>
              </form>
              <div className="toggle-form-login">
                Already have an account?{" "}
                <a href="#" id="show-login" onClick={toggleForm}>
                  Log in
                </a>
              </div>
            </div>
          )}

          {/* Google Signup */}
          <div className="google-signup">
            <button className="google-btn">
              <i className="fab fa-google"></i> Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
