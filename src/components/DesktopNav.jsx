import logo from "../images/logo.svg";

export default function DesktopNav() {
  return (
    <div className="ml-[3.89rem] mr-10 mt-[1.31rem]  hidden justify-between text-[0.875rem] font-medium text-Medium_Grey xl:flex">
      <div className="flex gap-10  ">
        <img src={logo} className=" mx-4 mb-6 mt-4" />
        <button className="hover:text-Black_Text">Careers</button>
        <button className="hover:text-Black_Text"> About</button>
      </div>
      <div className=" flex gap-10 ">
        <button className=" hover:text-Black_Text">Login</button>
        <button className="  rounded-[0.875rem] border-2 border-solid border-Medium_Grey px-[1.4rem] py-[0.81rem] hover:border-Black_Text  hover:text-Black_Text">
          Register
        </button>
      </div>
    </div>
  );
}
