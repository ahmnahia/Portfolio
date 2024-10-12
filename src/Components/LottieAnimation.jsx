"use client";
import LottieData from "@/Lottie/DevloperOnDesk.json";
import { useLottie } from "lottie-react";

export default function LottieAnimation() {
  const options = {
    animationData: LottieData,
    loop: true,
    autoPlay: true,
  };

  const { View } = useLottie(options);

  return <div className=" p-5">{View}</div>;
}
