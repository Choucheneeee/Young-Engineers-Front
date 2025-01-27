import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";


const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = Router;
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "bi bi-house" },
    { name: "Programs", path: "/programs", icon: "bi bi-book" },
    { name: "Groups", path: "/groups", icon: "bi bi-people" },
    { name: "Children", path: "/children", icon: "bi bi-person" },
    { name: "Payments", path: "/payments", icon: "bi bi-currency-dollar" },
    { name: "Parent", path: "/parents" },
    { name: "Attendance", path: "/attendance" },
  ];

  // Toggle the dropdown menu visibility
  const getStickerImage = (stickerName) => {
    return `/images/${stickerName}.png`; // Use absolute path for public folder
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    // Remove token from localStorage
    const token = localStorage.getItem("token");
    console.log("Logging out user with token:", token);
    localStorage.removeItem("token");
    console.log("sibon:", token);

    // Redirect to login page
    window.location.href = "/dashboard";
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{
        width: "250px",
        height: "100vh",
        fontFamily: "'Signika', sans-serif",
      }}
    >
     <Link
  to="/dashboard"
  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
>
<img 
  src="/images/logo.png" 
  alt="Logo" 
  style={{ width: "150px", height: "auto" }}
/>

</Link>


      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <Link
              to={item.path}
              className="nav-link link-dark"
              style={{
                fontWeight: 400,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className={`${item.icon} me-2`}></i> {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown position-relative">
        <button
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          style={{ fontWeight: 400 }}
        >
          <img
            src="/images/logo.png"
            alt="User"
            width="40"
            height="40"
            className="rounded-circle me-2"
          />
          <strong>Admin</strong>
        </button>
        {isDropdownOpen && (
          <ul
            className="text-small shadow"
            style={{
              position: "absolute",
              bottom: "100%",
              left: "0",
              zIndex: 10,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              padding: "8px 0",
              minWidth: "150px",
            }}
          >
            <li>
              <button
                onClick={handleLogout}
                className="dropdown-item text-danger"
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign out
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
