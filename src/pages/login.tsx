import Image from "next/image";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter(); // Initialize the router instance

  const handleLogin = () => {
    // Perform validation or authentication logic here if needed
    router.push("/homepage"); // Navigate to the homepage
  };
  
  return (
    <div className="loginPageContainer">
      <Image
        src="/images/inia_logo.png"
        alt="INIA Biosciences logo"
        width={100}
        height={100}
      ></Image>
      <h1>Welcome to <br></br>INIA Biosciences</h1>
      <p className="safeData">Keep your data safe</p>
      <div className="loginField">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" />
      </div>
      <div className="loginField">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button  onClick={handleLogin}>LOGIN</button>
      <p className="forgotPassword">Forgot password?</p>
      <p className="noAccount">Don&apos;t have an account? <span>Register with your doctor!</span></p>
    </div>
  );
};

export default LoginPage;
