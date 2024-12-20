import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const WelcomePage = () => {
  const router = useRouter();

  // Redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login"); // Redirect to the login page
    }, 5000); // 5 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Welcome | INIA Biosciences</title>
        <meta name="description" content="Welcome to INIA Biosciences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="welcomePageContainer">
        <Image
          src="/images/inia_logo.png"
          alt="INIA Biosciences logo"
          width={150}
          height={150}
        ></Image>
        <div className="welcomeTextCont">
          <div className="line"></div>
          <h1>
            Welcome to <br /> <span>INIA BIOSCIENCES</span>
          </h1>
          <div className="line"></div>
        </div>

        <p>Redirecting to login...</p>
      </div>
    </>
  );
};

export default WelcomePage;
