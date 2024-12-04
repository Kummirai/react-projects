import React from 'react';

const Header = () =>{
  return (
    <div className="header=container">
      <div className="menu-dash">
        <img src="../assets/more.png" alt="menu icon" />
        <img src="../assets/dashboard.png" alt="dashboard icon" />
      </div>
      <div className="menu-dash seach-bell">
        <img src="" alt="search icon" />
        <img src="../assets/bell.png" alt="bell icon" />
      </div>
    </div>
    )
}

export default Header;