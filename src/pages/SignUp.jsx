import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-[500px] w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
        <form>
          <div className="flex  gap-4"> 
          <div className="w-[48%]">
            <label className="block text-sm font-medium text-gray-700">First name</label>
            <input
              type="text"
              placeholder="Input first name"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-pink-300"
            />
          </div>
          <div  className="w-[48%]">
            <label className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              type="text"
              placeholder="Input last name"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-pink-300"
            />
          </div>
          </div>
          <div className="mb-4 mt-6">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example.email@gmail.com"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-pink-300"
            />
          </div>
          <div className="mb-4 mt-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter at least 8+ characters"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-pink-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              By signing up, I agree with the <a href="#" className="text-pink-500">Terms of Use & Privacy Policy</a>
            </span>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">Sign up</button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-pink-500">Log in</a>
        </p>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="p-2 bg-red-500 text-white rounded-full">
            <FaGoogle size={20} />
          </button>
          <button className="p-2 bg-blue-600 text-white rounded-full">
            <FaFacebook size={20} />
          </button>
          <button className="p-2 bg-black text-white rounded-full">
            <FaApple size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
