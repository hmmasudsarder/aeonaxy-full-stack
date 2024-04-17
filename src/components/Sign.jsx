import { Link } from "react-router-dom";
import image from "../assets/images/image.png";
const Sign = () => {
  return (
    <div>
      <div className="flex-col flex justify-center gap-10 md:gap-0 items-center lg:flex-row">
        {/* image part */}
        <div className="w-5/12 bg-orange-200 h-auto">
          <div className="w-10/12 mx-auto h-full">
            <h1 className="font-extrabold text-4xl mt-16 font-italy">
              dribbble
            </h1>
            <div className="flex items-center">
              <h2 className="text-4xl py-14">
                Discover the world top <br />
                Designers & Creatives.
              </h2>
            </div>
            <div className="">
              <img src={image} alt="" />
            </div>
            <div className="mt-5">
              <h1>
                Art by{" "}
                <a href="" className="underline ">
                  Peter Tarka
                </a>
              </h1>
            </div>
          </div>
        </div>
        {/* sign up from  */}
        <div className="w-8/12">
          <div className="-mt-2 ">
            <h1 className="font-semibold text-right mr-3">
              Already a member
              <Link to="/login" className="underline font-extrabold ml-2">
                Sign In
              </Link>
            </h1>
          </div>
          <div className="w-8/12 mx-auto">
            <h1 className="font-bold text-4xl mt-28 mb-12">
              Sign up to Dribbble
            </h1>
            <div className="flex items-center gap-10">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="font-bold">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="font-bold">User Name</span>
                </div>
                <input
                  type="username"
                  placeholder="User Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex items-center gap-10">
              <label className="form-control w-full">
                <div className="label">
                  <span className="font-bold">EMAIL</span>
                </div>
                <input
                  type="email"
                  placeholder="type your email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="flex items-center gap-10">
              <label className="form-control w-full">
                <div className="label">
                  <span className="font-bold">Password</span>
                </div>
                <input
                  type="User Name"
                  placeholder="6+ characters"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="">
              <input type="checkbox" className="checkbox checkbox-md mt-3" />
              <span className="ml-3">
                Creating an account means you're okay with our{" "}
                <span className="font-extrabold">
                  Terms of Service. Privacy Policy
                </span>
                , and our default{" "}
                <span className="font-extrabold">Notification Settings</span>{" "}
              </span>
            </div>
            <div className="flex items-center gap-10 mt-4">
              <label className="form-control w-full max-w-xs">
                <input
                  type="submit"
                  value="Create account"
                  className="text-white btn hover:text-black w-full font-extrabold bg-red-500 max-w-xs"
                />
              </label>
            </div>
            <div className="">
              <input type="checkbox" className="checkbox checkbox-md mt-3" />
              <span className="ml-3">
                Creating an account means you're okay with our{" "}
                <span className="font-extrabold">
                  Terms of Service. Privacy Policy
                </span>
                , and our default{" "}
                <span className="font-extrabold">Notification Settings</span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
