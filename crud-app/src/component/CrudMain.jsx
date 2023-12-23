import React from "react";

import NavbarMain from "./header/Navbar";
import CreateData from "./crudApp/createData/CreateData";

const CrudMain = () => {
  return (
    <div>
      <NavbarMain />
      <CreateData />
    </div>
  );
};

export default CrudMain;
