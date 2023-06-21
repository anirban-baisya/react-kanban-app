import user1 from "../assets/avatars/user1.png";
import user2 from "../assets/avatars/user2.png";
import user3 from "../assets/avatars/user3.png";
import user4 from "../assets/avatars/user4.png";
import edit from "../assets/header/edit.png";
import link from "../assets/header/link.png";
import addHeader from "../assets/header/add-header.png";
import filter from "../assets/header/filter.png";
import headerCalendar from "../assets/header/header-calendar.png";
import arrowDown from "../assets/arrow-down.png";
import members from "../assets/members.png";
import view1 from "../assets/header/view1.png";
import view2 from "../assets/header/view2.png";
import ProgressBoard from "./ProgressBoard";


const Header = () => {


    return (
        <>
            <div className="relative h-screen px-6 py-[2.6rem] md:px-12 overflow-y-auto">
                <div className="w-full flex   justify-between">
                    <div className="flex items-center">
                        <span className="font-semibold text-[1.5rem] lg:text-[2.9rem] leading-[2.9rem] mr-[1.4rem]">
                            Mobile App
                        </span>
                        <img
                            src={edit}
                            className="w-[30px] h-[30px] mr-[0.9rem]"
                            alt="edit"
                        />
                        <img
                            src={link}
                            className="w-[30px] h-[30px]"
                            alt="link"
                        />
                    </div>
                    <div className="hidden sm:block sm:flex items-center gap-[0.5rem] ">
                        <img
                            src={addHeader}
                            className=" hidden lg:inline w-[22px] h-[22px] mr-[1.5rem]"
                            alt="addHeader"
                        />
                        <span className=" hidden lg:inline -ml-6  text-[#5030E5] font-medium text-base leading-5">
                            Invite
                        </span>
                        

                        {/* Multiple avatar sec /> */}

                        <div className="flex -space-x-2 overflow-hidden ">
                            <img
                                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                                src={user1}
                                alt="{user.handle}"
                            />
                            <img
                                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                                src={user2}
                                alt="{user.handle}"
                            />
                            <img
                                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                                src={user3}
                                alt="{user.handle}"
                            />
                            <img
                                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                                src={user4}
                                alt="{user.handle}"
                            />

                            <div className=" flex md:h-10 md:w-10 h-8 w-8 items-center justify-center rounded-full bg-red-200 ring-2 ring-white ">
                                <span className=" font-medium text-[#D25B68] ">+2</span>
                            </div>
                        </div>



                    </div>
                </div>
                <div className=" w-full flex mt-10 justify-between">
                    <div className=" w-full flex gap-3">
                        <button className="w-[7.7rem] h-[2.5rem]  flex items-center justify-center gap-[0.5rem] border border-[#787486] rounded-md ">
                            <img
                                src={filter}
                                alt="filter"
                                className="w-[11.47px] h-[13.2px]"
                            />
                            <span className="text-[#787486] font-medium text-base leading-[1.2rem] mr-[0.2rem]">
                                Filter
                            </span>
                            <img
                                src={arrowDown}
                                className="w-[11.56px] h-[5.73px]"
                                alt="arrowDown"
                            />
                        </button>
                        <button className="w-[7.7rem] h-[2.5rem]  flex items-center justify-center gap-[0.5rem] border border-[#787486] rounded-md ">
                            <img
                                src={headerCalendar}
                                alt="headerCalendar"
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[#787486] font-medium text-base leading-[1.2rem] mr-[0.2rem]">
                                Today
                            </span>
                            <img
                                src={arrowDown}
                                className="w-[11.56px] h-[5.73px]"
                                alt="arrowDown"
                            />
                        </button>
                    </div>
                    <div className=" hidden md:block md:flex md:ml-2 md:gap-5 md:items-center">
                        <button className="w-[6.1rem] h-[2.5rem]  flex items-center justify-center gap-[0.5rem] border border-[#787486] rounded-md ">
                            <img
                                src={members}
                                alt="members"
                                className="w-[16px] h-[16px]"
                            />
                            <span>Share</span>
                        </button>
                        <div className="border border-[#787486] h-7 "></div>
                        <button className="w-[40px] h-[40px]">
                            <img src={view1} alt="view1" />
                        </button>
                        <button className="w-[21px] h-[21px]">
                            <img src={view2} alt="view2" />
                        </button>
                    </div>
                </div>
                <ProgressBoard />

            </div>
        </>
    );
};

export default Header;