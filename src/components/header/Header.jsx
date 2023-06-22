import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import Dropdown from "./DropDown";

const Header = () => {
  return (
    <>
      <div className="h-14 bg-regal-blue flex justify-between items-center text-white px-5">
        <div className="flex items-center">
          <div className="flex items-center">
            <IoCall />
            <p className="pl-0.5">+98697579866</p>
          </div>
          <div className="flex items-center px-5">
            <IoMail />
            <p className="pl-0.5">hello@123.com</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <IoLocationSharp />
            <p className="pl-0.5">locations</p>
          </div>
          <div className="bg-white w-0.5 h-8 mx-4" />
          <div className="flex ">
            <Dropdown val={["$Dollar(us)", "@Ruppee", "@Ruppee"]} />
          </div>
          <div className="flex pl-3">
            <Dropdown val={["EN", "IN"]} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;
