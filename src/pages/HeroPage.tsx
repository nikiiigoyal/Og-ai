// HeroPage.jsx
import HeroText from "../components/hero/HeroText";
import Stats from "../components/hero/Stats";

export default function HeroPage() {
  return (
    <div className="bg-[#Fff] w-full min-h-screen py-18">
      <HeroText />
      <Stats />
    </div>
  );
}