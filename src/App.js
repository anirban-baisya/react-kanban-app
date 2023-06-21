// import logo from './logo.svg';
// import './App.css';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <>

//     <div className="App">

//     <main className=" flex w-full flex-row ">
//       <aside className="md:flex w-1/5 md:border-r hidden ">
//         <Sidebar />
//       </aside>
//       {/* <section className="mb-20 w-full  ">
//         <Navbar />
//         <Filter />
//         <TaskBoard />
//       </section> */}
//     </main>

//     </div>
//     </>
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import classNames from 'classnames';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProgressBoard from './components/ProgressBoard';

function App() {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>

{/* <div
      className={classNames({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      /> */}
      {/* <div className="">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        {props.children}
      </div> */}
      {/* <div className="flex flex-col w-full border-gray-300">
        <Navbar  />
      </div>
    </div> */}

    <div className="flex min-h-screen">
    <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      <div className="flex flex-col w-full border-gray-300">
        <Navbar />
        <hr className="border-t border-gray-300" />
        <div className=" mx-4 md:mx-8 lg:mx-12 mt-5">
          <Header />
            {/* <ProgressBoard /> */}
          <div className="">
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

