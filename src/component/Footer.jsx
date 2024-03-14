import logo2 from "../assets/logo2.png";
import jour from "../assets/jour.png";
import arun from "../assets/arun.png";
import Form from "./Form";

const Footer = () => {
  return (
    <div id="footer" className=" bg-[#162242]">
      <div className="  px-24 gap-4 max-md:flex-col flex justify-around items-center py-8">
        <div className="  rounded-full">
          <img
            src={logo2}
            width={300}
            className="max-md:h-20 max-md:w-20 rounded-full"
            alt=""
          />
        </div>

        <div>
          <Form />
        </div>
      </div>
      <div className="px-24 flex justify-around items-center py-8 border-t text-white border-t-lime-50">
        Copyright © 2024 Mr.Arun&rsquo;s Journalism Course.
      </div>
    </div>
  );
};

export default Footer;
