import React from "react";
import "./ProfileRecovery.css";

export const ProfileRecovery = () => {
  return (
    <div className="index">
      <div className="group-wrapper">
        <div className="group">
          <div className="project-card">
            <div className="overlap-group">
              <div className="type-advanced">
                <div className="frame" />
                <div className="text-field">
                  <div className="placeholder">Email</div>
                </div>
                <div className="placeholder-wrapper">
                  <div className="placeholder">Username</div>
                </div>
                <div className="div" />
                <div className="footer" />
                <div className="frame-wrapper">
                  <div className="message-wrapper">
                    <div className="message">RECOVER YOUR LOGIN DATA</div>
                  </div>
                </div>
                <div className="chip">
                  <div className="label">Submit</div>
                </div>
              </div>
              <img
                className="type-linear-property"
                alt="Type linear property"
                src="https://anima-uploads.s3.amazonaws.com/projects/64d667650c99e88d97bbd855/releases/64d78fb67c4a5bc535fdc25c/img/type-linear--property-2-security--property-3-lock-password-unloc.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
