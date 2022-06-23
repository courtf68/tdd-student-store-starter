import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="bottom">
      <div className="flex1">
        <p>
          <b>Categories </b>
        </p>
        <p> All Categories Clothing Food Accessories Tech </p>
      </div>
      <div className="flex1">
        <p>
          <b>Company </b>
        </p>
        <p>About Us Find a Store Terms Sitemap Careers</p>
      </div>
      <hr></hr>
    </div>
  );
}
