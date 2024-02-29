import React from "react";

import BodyBox2 from "../Component/BodyBox2";
import BodyBox3 from "../Component/BodyBox3";

import BodyBox1 from "../Component/BodyBox1";
import BodyBox4 from "../Component/BodyBox4";
import BodyBox5 from "../Component/BodyBox5";
import BodyBox6 from "../Component/BodyBox6";

const Body = () => {
  return (
    <div>
      <hr className=" border-b-2 text-gray-500" />
      <div className=" mt-8 md:mt-20 font-normal">
        <div>
          <BodyBox1 />
        </div>

        <div>
          <BodyBox2 />
        </div>

        <div>
          <BodyBox3 />
        </div>

        <div>
          <BodyBox4 />
        </div>

        <div>
          <BodyBox5 />
        </div>

        <div>
          <BodyBox6 />
        </div>

      </div>
    </div>
  );
};

export default Body;
