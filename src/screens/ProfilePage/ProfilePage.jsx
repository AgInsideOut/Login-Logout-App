import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./ProfilePage";

export const ProfilePage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div className="profile-page">
        {screenWidth < 1728 && (
          <div className="group">
            <div className="project-card">
              <div className="overlap-group">
                <div className="type-advanced">
                  <div className="frame" />
                  <div className="div" />
                  <div className="footer" />
                  <div className="frame-wrapper">
                    <div className="frame-2">
                      <div className="message">FIRST NAME</div>
                      <div className="text-wrapper">FIRST NAME</div>
                    </div>
                  </div>
                  <div className="frame-3">
                    <div className="message">LAST NAME</div>
                    <div className="text-wrapper">LAST NAME</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="message-wrapper">
                      <p className="message">
                        HI {"{"}USER{"}"} HAPPY TO SEE YOU !
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="type-linear-property"
                  alt="Type linear property"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64d667650c99e88d97bbd855/releases/64d78fb67c4a5bc535fdc25c/img/type-linear--property-2-like--property-3-star-shine.svg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
