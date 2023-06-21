import search from "../assets/search.png";
import navCalendar from "../assets/nav-calendar.png";
import messageQuestion from "../assets/message-question.png";
import notification from "../assets/notification.png";
import avatar from "../assets/avatar.png";
import arrowDown from "../assets/arrow-down.png";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-center text-gray-500">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="hidden md:flex items-center rounded-md bg-gray-100 px-4 py-2 ml-8">
          <img src={search} alt="search" className="w-6 h-6"/>
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[471px] h-[11px] hidden md:block outline-none bg-gray-100 p-3 ml-3"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-6">
            <img src={navCalendar} alt="navCalendar" className="w-6 h-6"/>
          </div>
          <div className="flex items-center justify-center mr-6">
            <img src={messageQuestion} alt="messageQuestion" className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={notification} alt="notification" className="w-6 h-6"/>
          </div>

          <div className="flex items-center gap-3 mr-8">
            <div className="hidden my-0 mx-[10px] lg:flex flex-col gap-[3px] items-end">
              <span className="text-base font-normal text-black">
                Anima Agrawal
              </span>
              <span className="text-sm font-normal text-grey">U.P, India</span>
            </div>
            <img
              src={avatar}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <img src={arrowDown} alt="arrowDown" className="w-6 h-6"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;