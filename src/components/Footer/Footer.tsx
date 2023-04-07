import React from "react";
import wbaLogo from "../../assets/images/instructor/wba-black.png";
const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F6F6F6] my-6 px-6 gap-2">
      <div className="mt-2 flex flex-col items-start gap-2">
        <p>About WritingBA</p>
        <p>Community Guidlines</p>
        <p>Terms of Service and Privacy</p>
        <p>Help & Support</p>
      </div>
      <hr></hr>
      <div className="flex items-center gap-4">
        <img src={wbaLogo} alt="" />
        <span>@2023 WritingBA. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
