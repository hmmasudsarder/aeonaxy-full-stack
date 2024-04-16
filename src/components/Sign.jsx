import image from "../assets/images/image.png";
const Sign = () => {
  return (
    <div>
      <div className="flex items-center sm:flex-col">
        {/* image part */}
        <div className="w-5/12 bg-orange-200 h-auto">
          <div className="w-10/12 mx-auto h-full">
            <h1 className="font-bold mt-16">Dribbble</h1>
            <div className="flex items-center">
              <h2 className="text-4xl py-14">
                Discover the world top <br />
                Designers & Creatives.
              </h2>
            </div>
            <div className="">
              <img src={image} alt="" />
            </div>
            <div className="my-12">
            <h1>Art by <a href="" className="underline ">Peter Tarka</a></h1>
            </div>
          </div>
        </div>
        {/* sign up from  */}
        <div className="w-8/12 bg-neutral-500">
          <div className="w-8/12 mx-auto">
            <h1 className="font-bold text-center -mt-64 mb-12">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
