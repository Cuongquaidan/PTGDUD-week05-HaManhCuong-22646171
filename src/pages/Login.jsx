import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import LoginImage from "/loginImage.jpg"
export default function Login() {
  return (
    <div className="flex items-center rounded-2xl mx-auto w-full">
        <div>
            <img src={LoginImage} alt="" />
        </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <p className="text-center text-gray-600 mb-4">Enter your email to log in.</p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-pink-300"
            />
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">Continue</button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-center text-xs text-gray-600 mb-4">
          By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
        </p>
        <div className="flex flex-col space-y-2">
          <button className="flex items-center justify-center p-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
          <button className="flex items-center justify-center p-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <FaFacebook className="mr-2" /> Continue with Facebook
          </button>
          <button className="flex items-center justify-center p-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <FaApple className="mr-2" /> Continue with Apple
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
