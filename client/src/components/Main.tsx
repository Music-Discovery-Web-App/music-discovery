import React from "react";
import TestField from "./TestField";

import ResultDisplay from "./ResultDisplay";
import FooterTest from "./FooterTest";
import SidebarTest from "./SidebarTest";

const Main = () => {
  return (
    <div className="w-full h-screen bg-green-200 flex flex-col">
      <div className="flex flex-grow">
        <div className="flex flex-col w-4/5">
          <TestField />
          <ResultDisplay />
        </div>
        <SidebarTest />
      </div>
      <FooterTest />
    </div>
  );
};

export default Main;
