import React, { useEffect, useRef } from "react";
import TableauReport from "tableau-react";
import { RotateSpinner } from "react-spinners-kit";
const { tableau } = window;

const DashBoard = () => {
  const [showElement, setShowElement] = React.useState(true);

  useEffect(() => {
    localStorage.removeItem("cartItems");
    setTimeout(function () {
      setShowElement(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <TableauReport url="https://public.tableau.com/views/dummy3_16549439268120/Dashboard12?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link" /> */}
      <TableauReport url="https://public.tableau.com/views/myfirst_dash_firstpage2/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link" />

      {showElement && (
        <>
          <div
            className="h-100 d-flex align-items-center justify-content-center"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <RotateSpinner size={50} color="#5A2675" loading={true} />
          </div>
        </>
      )}
    </>
  );
};
export default DashBoard;
