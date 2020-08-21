import React from "react";

const Sidebar = ({ width, height, children }) => {
  const toggleMenuStyle = {
    height: "100px",
    borderTopRightRadius: "10rem",
    borderBottomRightRadius: "9rem",
    width: "30px",
    position: "absolute",
    outline: "none",
    zIndex: "1",
    background: "rgba(64, 194, 133, 0.693)",
    borderColor: "rgba(64, 194, 133, 0.693)",
    borderLeft: "0",
  };

  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <div
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          // minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          style={
            (toggleMenuStyle, { transform: `translate(${width}px, 20vh)` })
          }
        ></button>
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
