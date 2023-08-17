import React, { useState, useCallback, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css";
import "./AccessAccount.css";
import { useAuth } from "../data/auth-context.js";

const AccessAccount = ({ isAuthenticated, setIsAuthenticated }) => {
  const { login, register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleRegistrationSubmit = useCallback((event) => {
    event.preventDefault();
    // GATHER DATA AND CALL REGISTER FUNCTION
    const userData = {
      dateOfBirth: selectedDate,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      username,
      password,
    };
    register(userData);
  }, [selectedDate, username, password, register]);

  const handleLoginSubmit = useCallback((event) => {
    event.preventDefault();
    login(username, password);
    setIsAuthenticated(true);
  }, [username, password, login]);

  const onContentContainerClick = useCallback(() => {
    window.location.href =
      "mailto:vixovi3353@v1zw.com?subject=Password Recovery Request";
  }, []);


  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="accessaccount" data-animate-on-scroll>
      {/* Background */}
      <img className="stars-icon" alt="" src="/stars.svg" />
      {/* Registration Form */}
      <form onSubmit={handleRegistrationSubmit}>
        <div className="project-card2">
          <div className="typeadvanced2">
            <div className="frame-div">
              <div className="message-frame">
                <b className="message2">REGISTRATION</b>
              </div>
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="date-field"
              wrapperClassName="date-picker-wrapper"
              customInput={
                <Input
                  variant="outline"
                  width="160px"
                  focusBorderColor="#eac756"
                  placeholder="Date of Birth"
                />
              }
            />
            <Input
              className="text-field"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="First name"
              w="400px"
            />
            <Input
              className="text-field1"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="Last name"
              w="400px"
            />
            <Input
              className="text-field2"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="Email"
              w="400px"
            />
            <Input
              className="text-field3"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              w="400px"
            />
            <Input
              className="text-field4"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              w="400px"
            />
            <div className="footer1">
              <Button
                type="submit"
                className="chip2"
                variant="ghost"
                colorScheme="yellow"
                rightIcon={<ArrowForwardIcon />}
                as="a"
                href="/profilepage"
                onClick={handleRegistrationSubmit}
              >
                Sign up
              </Button>
            </div>
            <div className="message3">DATE OF BIRTH</div>
          </div>
        </div>
      </form>

      {/* Login Form */}
      <form onSubmit={handleLoginSubmit}>
        <div className="project-card3">
          <div className="typeadvanced3">
            <div className="typeadvanced-inner1">
              <div className="message-frame">
                <b className="message2">LOGIN</b>
              </div>
            </div>
            <Input
              className="text-field5"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              w="400px"
            />
            <Input
              className="text-field5"
              variant="outline"
              width="400px"
              focusBorderColor="#eac756"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              w="400px"
            />
            <div className="footer2">
              <Button 
                type="submit"
                className="chip2"
                variant="ghost"
                colorScheme="yellow"
                rightIcon={<ArrowForwardIcon />}
                as="a"
                href="/profilepage"
                onClick={handleLoginSubmit}
              >
                Sign in
              </Button>
            </div>
            <div className="content" onClick={onContentContainerClick}>
              <Link className="message5" to="/">
                Forgot password
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccessAccount;
