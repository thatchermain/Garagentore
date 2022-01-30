import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-">Site under construction.</h1>
      <h3 className="text-center text-secondary">
        Please click{" "}
        <span>
          <Link href={"/"}>
            <a className="text-primary">HERE </a>
          </Link>
        </span>
        to go back to Homepage
      </h3>
    </div>
  );
};

export default NotFound;
