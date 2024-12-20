import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface HeaderProps {
  backgroundColor?: string; // Optional prop for background color
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/homepage");
  };

  return (
    <header style={{ backgroundColor: backgroundColor }}>
      <Image
        src="/images/inia_logo.png"
        alt="INIA Biosciences logo"
        width={50}
        height={50}
        onClick={navigateToHome}
      ></Image>
      <p onClick={navigateToHome}>INIA Biosciences</p>
    </header>
  );
};

export default Header;
