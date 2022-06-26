import * as React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <img
          id="pic"
          src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
        ></img>
      </Link>
    </div>
  );
}
