import { useCallback, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import "./ProfileRecovery.css";


const ProfileRecovery = () => {
  
  const navigate = useNavigate();
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

  const onChipClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="profilerecovery" data-animate-on-scroll>
      <img className="stars-icon" alt="" src="/stars.svg" />
      <div className="project-card">
        <div className="typeadvanced">
          <div className="typeadvanced-inner">
            <div className="message-wrapper">
              <b className="message">
                <p className="login-failed">{`Login Failed. `}</p>
                <p className="click-below-to">
                  Click below to return to the login page.
                </p>
              </b>
            </div>
          </div>
          <Button
            className="chip"
            variant="ghost"
            colorScheme="yellow"
            rightIcon={<ArrowForwardIcon />}
            as="a"
            href="/"
            onClick={onChipClick}
          >
            Try Again
          </Button>
        </div>
        <img
          className="typelinear-property-2securi"
          alt=""
          src="/typelinear-property-2security-property-3lock-password.svg"
        />
      </div>
    </div>
  );
};

export default ProfileRecovery;