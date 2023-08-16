import { useCallback, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";


const ProfilePage = () => {

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

  const handleLogout = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="profilepage" data-animate-on-scroll>
      <img className="stars-icon1" alt="" src="/stars1.svg" />
      <div className="project-card1">
        <div className="typeadvanced1">
          <div className="typeadvanced-child">
            <div className="message-container">
              <b className="message1">HI HAPPY TO SEE YOU !</b>
            </div>
          </div>
          <div className="footer">
            <Button
              className="chip1"
              variant="ghost"
              colorScheme="yellow"
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="/"
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </div>
        </div>
        <img
          className="typelinear-property-2like"
          alt=""
          src="/typelinear-property-2like-property-3star-shine.svg"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
