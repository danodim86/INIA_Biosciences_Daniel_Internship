import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setBackgroundColor("#F5F5DC"); 
        break;
      case "/login":
        setBackgroundColor("#F5F5DC"); 
        break;
      case "/makeScan":
        setBackgroundColor("#F5F5DC"); 
        break;
      default:
        setBackgroundColor("#F5F5DC"); 
        break;
    }
  }, [router.pathname]);

  return (
    <div
      style={{
        backgroundColor
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
