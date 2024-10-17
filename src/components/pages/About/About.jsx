import React from "react";
import Heading from "../../HelperComp/Heading";
import LogoLink from "./LogoLink";




const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat ex obcaecati tenetur dolorum quasi rem! Vero consequuntur
          perferendis architecto.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
          beatae.adipisicing elit. Enim, beatae.
        </p>
      </div>
      <div>
        <LogoLink />
      </div>  
    </div>
  );
};

export default About;