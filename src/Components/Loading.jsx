import React from "react";
import { Vortex } from "react-loader-spinner";

const Loading = () => (
  <div className="flex justify-center items-center ">
    <Vortex
      visible={true}
      height="580"
      width="580"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["red", "green", "blue", "yellow", "orange", "purple"]}
    />
  </div>
);
export default Loading;
