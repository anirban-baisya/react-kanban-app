// import React, { useState } from 'react';
import logo from "../assets/logo.png";
import arrowLeft from "../assets/left-arrow.png";
import home from "../assets/home.png";
import messages from "../assets/messages.png";
import tasks from "../assets/tasks.png";
import members from "../assets/members.png";
import settings from "../assets/settings.png";
import addSquareSide from "../assets/add-square-side.png";
import lampOn from "../assets/lamp-on.png";
// import classNames from "classnames";

// const Sidebar = () => {
//   const menus = [
//     {
//       id: 1,
//       name: 'Home',
//       icon: 'icons/category.png',
//     },
//     {
//       id: 2,
//       name: 'Messages',
//       icon: 'icons/message.png',
//     },
//     {
//       id: 3,
//       name: 'Tasks',
//       icon: 'icons/task-square.png',
//     },
//     {
//       id: 4,
//       name: 'Members',
//       icon: 'icons/profile-2user.png',
//     },
//     {
//       id: 5,
//       name: 'Settings',
//       icon: 'icons/setting-2.png',
//     },
//   ];

//   const projects = [
//     {
//       id: 1,
//       name: 'Mobile App',
//       icon: 'icons/dot.png',
//       color: 'bg-green',
//     },
//     {
//       id: 2,
//       name: 'Website Redesign',
//       icon: 'icons/dot.png',
//       color: 'bg-orange',
//     },
//     {
//       id: 3,
//       name: 'Design System',
//       icon: 'icons/dot.png',
//       color: 'bg-light-pink',
//     },
//     {
//       id: 4,
//       name: 'Wireframes',
//       icon: 'icons/dot.png',
//       color: 'bg-light-blue',
//     },
//   ];

//   const [selectedProject, setSelectedProject] = useState(projects[0].id);
//   const [collapsed, setSidebarCollapsed] = useState(false);

//   const handleProjectClick = (projectId) => {
//     setSelectedProject(projectId);
//   };

//   return (
//     <>

//     {/* <div className="2xl:w-[250.5px] xl:w-[225px] lg:w-[225px] w-[200px] hidden sm:block">
//       <div className="px-5 border-b border-r border-gray-300">
//         <div className="flex flex-row py-8 space-x-2 2xl:space-x-[46px] xl:space-x-7 lg:space-x-8 md:space-x-2">
//           <div className="flex items-center gap-2">
//             <img src="/icons/logo.png" alt="logo" className="w-6 h-6" />
//             <h1 className="text-xl font-semibold text-dark">Project M.</h1>
//           </div>
//           <div className="flex items-center">
//             <img src="icons/arrow.png" alt="arrow" className="h-5" />
//           </div>
//         </div>
//       </div> */}
//       {/* <div className="flex-1 border-r sticky top-0 left-0 border-gray-300 min-h-screen bg-white w-[50px] sm:min-w-[250px] xl:min-w-[280px]"> */}
//       <div
//       className={classNames({
//         // 👇 use grid layout
//         "grid min-h-screen": true,
//         // 👇 toggle the width of the sidebar depending on the state
//         "grid-cols-sidebar": !collapsed,
//         "grid-cols-sidebar-collapsed": collapsed,
//         // 👇 transition animation classes
//         "transition-[grid-template-columns] duration-300 ease-in-out": true,
//       })}
//     >
//       <div className="h-20 flex justify-between items-center px-[13px] sm:px-[22px]">
//         <span className="flex text-xl sm:text-lg font-semibold text-black gap-[9px]">
//           <img src={logo} alt="Project M." />
//           <span className="opacity-0 md:opacity-100">Project M.</span>
//         </span>
//         <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
//         <img src={arrowLeft} alt="arrow" className="mr-3 hidden sm:block" />
//         </button>
//       </div>

//       <hr className="border-t border-gray-300" />
//       <div className="px-5 border-r border-gray-300 py-[30px] px-[12px] text-base font-medium text-gray-600">
//         <div className="flex flex-col gap-[25px] px-[10px]">
//           {/* Category elements */}
//           {menus.map((menu) => (
//             <div
//               className="flex flex-row gap-[14px] cursor-pointer"
//               key={menu.id}
//             >
//               <img src={menu.icon} alt={menu.name} className="w-6 h-6" />
//               <div>{menu.name}</div>
//             </div>
//           ))}
//         </div>

//         <hr className="my-[30.5px] border-gray-300 text-base font-medium text-gray-600" />
//         <div className="flex flex-col gap-5">
//           <div className="flex flex-row justify-between px-[10px]">
//             <div className="text-xs font-bold text-gray-600">MY PROJECTS</div>
//             <img src="icons/add-square.png" alt="add" className="w-4 h-4" />
//           </div>

//           <div className="space-y-[20px]">
//             {projects.map((project) => (
//               <div
//                 className={`flex flex-row justify-between py-[10px] text-base px-[10px] bg-opacity-[.08] ${
//                   selectedProject === project.id
//                     ? 'bg-dark-blue rounded-md font-semibold text-black'
//                     : 'font-medium text-gray-600'
//                 }`}
//                 key={project.id}
//                 onClick={() => handleProjectClick(project.id)}
//               >
//                 <div className="flex flex-row items-center gap-4">
//                   <div
//                     className={`w-2 h-2 rounded-full ${project.color}`}
//                   ></div>
//                   {project.name}
//                 </div>
//                 {selectedProject === project.id && (
//                   <img src={project.icon} alt="" className="w-4 my-auto" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center pt-[25px] border-r border-gray-300">
//         <div className="relative">
//           <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
//             <div className="h-[66px] w-[66px] rounded-full bg-neutral-100 flex items-center justify-center">
//               <div className="bg-yellow-500 bg-opacity-70 blur-lg rounded-full w-[33px] h-[33px] items-center justify-center"></div>
//               <img
//                 src="icons/lamp-on.png"
//                 alt="lamp"
//                 className="absolute w-6 h-6 inset-5"
//               />
//             </div>
//           </div>
//           <div className="mt-8 mb-2 xl:px-[16px] px-[12px]">
//             <div className="flex flex-col items-center justify-between px-3 rounded-2xl border-neutral-100 bg-neutral-100">
//               <div className="text-sm font-medium text-black mb-[12px] pt-[37px]">
//                 Thoughts Time
//               </div>
//               <div className="text-xs font-normal text-center text-gray-600">
//                 We don’t have any notice for you, till then you can share your
//                 thoughts with your peers.
//               </div>
//               <div className="px-3 py-3 mt-[14px] mb-5 text-xs font-medium text-black bg-white rounded xl:text-sm xl:px-5">
//                 <input
//                   type="text"
//                   placeholder="Write a message"
//                   className="w-full text-center outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import classNames from 'classnames';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon,
// } from '@heroicons/react/24/outline';

// add NavItem prop to component prop

const Sidebar = ({
    collapsed,
    //   navItems = defaultNavItems,
    shown,
    setCollapsed,
}) => {

    const navItems = [
        {
            id: 1,
            name: 'Home',
            icon: home,
        },
        {
            id: 2,
            name: 'Messages',
            icon: messages,
        },
        {
            id: 3,
            name: 'Tasks',
            icon: tasks,
        },
        {
            id: 4,
            name: 'Members',
            icon: members,
        },
        {
            id: 5,
            name: 'Settings',
            icon: settings,
        },
    ];

    const projectsItems = [
        {
            id: 1,
            name: 'Mobile App',
            color: '#7AC555',
        },
        {
            id: 2,
            name: 'Website Redesign',
            color: '#FFA500',
        },
        {
            id: 3,
            name: 'Design System',
            color: '#E4CCFD',
        },
        {
            id: 4,
            name: 'Wireframes',
            color: '#76A5EA',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(projectsItems[0].id);

    const Icon = collapsed ? arrowLeft : arrowLeft;
    return (
        <div
            className={classNames({
                // 'bg-indigo-700 text-zinc-50 fixed md:static md:translate-x-0 z-20': true,
                'flex-1 border-r sticky top-0 left-0 border-gray-300 min-h-screen bg-white ': true,

                'transition-all duration-300 ease-in-out': true,
                'w-[300px]': !collapsed,
                'w-16': collapsed,
                '-translate-x-full': !shown,
            })}
        >

            <div
                className={classNames({
                    // 'flex flex-col justify-between h-screen md:h-full sticky inset-0': true,
                    'flex flex-col  h-screen md:h-full sticky inset-0': true,
                })}
            >
                {/* logo and collapse button */}
                {/* <div
          className={classNames({
            'flex items-center border-b border-b-indigo-800 transition-none': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <img src={arrowLeft} alt="arrow" className="mr-3 hidden sm:block" />
          </button>
        </div> */}

                <div className="h-20 flex justify-between items-center px-[13px] sm:px-[22px] border-b-[1px] border-[#DBDBDB] ">
                    <span className="flex text-xl sm:text-lg font-semibold text-black gap-[9px]">
                        {!collapsed && <img src={logo} alt="Project M." className="w-[24px] h-[24px] mr-2" />}
                        {!collapsed && <span className="opacity-50 md:opacity-100">Project M.</span>}
                    </span>
                    <button onClick={() => setCollapsed(!collapsed)}>
                        <img src={arrowLeft} alt="arrow"
                            // className="mr-3 hidden sm:block" 
                            className= {`sm:inline w-[30px] h-[35px] ${collapsed &&'rotate-180'} `} 

                        />
                    </button>
                </div>


                {/* <div className="  overflow-y-scroll h-[600px]"> */}
                <div className={classNames({
                'overflow-y-scroll h-[600px]': !collapsed ?true :false,
                })}>
                    {/* Nav Items */}
                    <nav className="flex-grow">
                        <ul
                            className={classNames({
                                'my-2 flex flex-col gap-2 items-stretch border-b border-b-grey-light-1 my-0 mx-[1px] py-[30px] px-0': true,
                            })}
                        >
                            {navItems.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={classNames({
                                            'font-medium  text-[#787486] ': true,
                                            'hover:text-indigo-100 hover:bg-indigo-900 flex': true, //colors
                                            'transition-colors duration-300': true, //animation
                                            'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                                            'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                                        })}
                                    >
                                        {/* <link href={item.href} className="flex gap-2"> */}
                                        <img src={item.icon} alt={item.name} className="w-6 h-6" /> <span className="">{!collapsed && item.name}</span>
                                        {/* </Link> */}
                                    </li>
                                );
                            })}

                        </ul>
                    </nav>



                    {/* Project links section */}
                    <div className=" my-5 px-2 ">
                        <div className=" flex items-center justify-between text-xs font-bold text-gray-600 px-5 mb-5 ">
                            {!collapsed && <p className=" uppercase  ">My Projects</p>}
                            {!collapsed && <button className="">
                                {/* <AddSquare className=" h-5 w-5 " /> */}
                                <img src={addSquareSide} alt={'addSquareSide'} className="w-6 h-6" />
                            </button>}
                        </div>
                        <ul className="">
                            {!collapsed && projectsItems.map((item) => {
                                const { id, name, color } = item
                                return (
                                    <li
                                        key={id}
                                        //   className="my-3 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor first:bg-[#5030E514] first:font-semibold first:text-[#0D062D] overflow-visible px-5 "
                                        className={`my-3 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor overflow-visible px-5 ${selectedProject === item.id
                                            ? 'bg-dark-blue rounded-md font-semibold bg-[#3a1cc114] text-[#0D062D]'
                                            : 'font-medium text-gray-600'
                                            } hover:text-indigo-100 hover:bg-indigo-900 `}

                                    >
                                        <span
                                            style={{ backgroundColor: `${color}` }}
                                            className={`h-2 w-2 rounded-full `}
                                        ></span>
                                        <p className=" capitalize">{name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>



                    {/* Lamp section */}
                    {!collapsed && <div className="   sm:flex  sm:flex-col sm:items-center   ">
                        <div className="relative -bottom-8 rounded-full w-16 h-16 bg-[#f5f5f5]  flex justify-center  ">
                            <img
                                src={lampOn}
                                alt=""
                                className="z-20 rounded-full "
                            />
                        </div>
                        <div className=" px-5 py-5  w-52 h-52 rounded-2xl bg-[#f5f5f5] flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center gap-3 ">
                                <div className="font-medium leading-[1.1rem] text-sm">
                                    Thoughts Time
                                </div>
                                <div className="w-[10.4rem] font-normal text-xs leading-[0.9rem] text-[#787486]">
                                    <p>
                                        We don’t have any notice for you, till then you can share your
                                        thoughts with your peers.
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    className="w-[10.4rem] h-[2.5rem] font-normal text-sm text-black px-6 rounded "
                                    placeholder="Write a message"
                                />
                            </div>
                        </div>
                    </div>}



                </div>
            </div>
        </div>
    );
};
export default Sidebar;
