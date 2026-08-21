function Sidebar({ onPageChange, onLogout }) {
  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "14px 15px",
    marginBottom: "12px",
    border: "none",
    borderRadius: "8px",
    background: "transparent",
    color: "#334155",
    textAlign: "left",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#f1f5f9",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "35px" }}>
        📚 Menu
      </h2>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("dashboard")}
      >
        🏠 Dashboard
      </button>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("students")}
      >
        👩‍🎓 Students
      </button>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("teachers")}
      >
        👨‍🏫 Teachers
      </button>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("subjects")}
      >
        📚 Subjects
      </button>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("routine")}
      >
        🕐 Routine
      </button>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("attendance")}
      >
        📅 Attendance
      </button>

      <button
        style={buttonStyle}
        onClick={() => onPageChange("results")}
      >
        📝 Results
      </button>

      <button
        style={{
          ...buttonStyle,
          marginTop: "25px",
          color: "#dc2626",
        }}
        onClick={onLogout}
      >
        🚪 Logout
      </button>
    </aside>
  );
}

export default Sidebar;