
const Navbar = ({ setShowSidebar, showSidebar }) => {

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f3f4f6",
          color: "#1f2937",
          borderBottom: "1px solid #d1d5db",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
        className="hamburger"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className={`fa ${showSidebar ? "fa-times" : "fa-bars"}`}></i>
      </button>
        <h3>Admin Dashboard</h3>
      </div>
    </div>
  );
};

export default Navbar;
