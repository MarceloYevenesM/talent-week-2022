import React from "react";

const Business = ({ dark, logo }) => {
  const styles = dark ? "card-business bg-black imgBorder" : "card-business";

  return (

      <div className={styles}>
        <img src={logo} alt="logo empresa" />
      </div>
    
  );
};

export default Business;
