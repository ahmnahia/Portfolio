"use client";
import React from "react";

export default function ProfileImg() {
  return (
    <>
      <img
        src="/images/me2.jpg"
        className="pfp-pic-div w-full max-w-[400px] max-sm:w-[100%] h-[400px] max-md:h-[300px] bg-cover blob-shape bg-center relative"
      />
      <div className="for-svg-div bottom-[-40px] right-[240px] max-md:right-[160px]"></div>
      <div className="for-svg-div top-[-40px] right-[-40px]"></div>{" "}
    </>
  );
}
