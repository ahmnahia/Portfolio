"use client";
import LottieData from "@/Lottie/DevloperOnDesk.json";
import LottieDataDark from "@/Lottie/DevloperOnDeskDark.json";
import { useLottie } from "lottie-react";
import { useTheme } from "next-themes";

export default function LottieAnimation() {
  const { theme } = useTheme();
  const options = {
    animationData: theme == "dark" ? LottieDataDark : LottieData,
    loop: true,
    autoPlay: true,
  };

  const { View } = useLottie(options);

  return <div className=" p-5">{View}</div>;
}
