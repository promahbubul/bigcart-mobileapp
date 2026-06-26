import { useState } from "react";
// import WelcomeLogin from "./(auth)/welcome-login";
import Home from "./(public)/home";
import SplashOne from "./(splash)/splash-one";

export default function Index() {
  const [isSplashScreenActive, setIsSplashScreenActive] = useState(false);
  if (isSplashScreenActive) return <SplashOne />;
  return <Home />;
}
