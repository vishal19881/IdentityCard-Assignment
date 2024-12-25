import React from "react";

const Profile = ({ user }) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black p-8 py-16 "
      style={{
        margin: "0px",
        minHeight: "110vh", 
        backgroundColor: "rgb(14, 14, 14)",
      }}
    >
      <div className="bg-white shadow-lg rounded-xl p-5 md:p-6 md:flex md:items-center max-w-xl w-full justify-between border-8  h-auto">

         {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 p-4 border-8 border-white ">
          <div className="border-4 border-black p-4">
            <img
              src={user.picture.large}
              alt="Profile"
              className="w-36 h-36 shadow-md" v
            />
          </div>
        </div>

        {/* Information Section */}
        <div className="w-full md:w-2/3 md:pl-6 space-y-6">

          <div className="text-xl font-semibold text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-base md:text-lg">
              First Name:{" "}
              <span className="text-sm md:text-base">{user.name.first}</span>
            </p>
            <p className="text-base md:text-lg">
              Last Name:{" "}
              <span className="text-sm md:text-base">{user.name.last}</span>
            </p>
          </div>

          <div>
            <span className="text-gray-600 font-semibold md:text-lg">
              Gender:{" "}
            </span>
            <span className="text-gray-600 text-sm md:text-base font-semibold">
              {user.gender}
            </span>
          </div>

          <div>
            <span className="text-gray-600 font-semibold md:text-lg">
              Phone:{" "}
            </span>
            <span className="text-gray-600 font-semibold text-sm md:text-base">
              {user.phone}
            </span>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Profile;
