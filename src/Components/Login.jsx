function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-icon">🏫</div>

        <h1>Texas international</h1>
        <p>Welcome back! 👋</p>

        <form onSubmit={handleSubmit}>
          <label>👤 Username</label>
          <input
            type="text"
            placeholder="Enter username"
            required
          />

          <label>🔒 Password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
          />

          <button type="submit">
            🚀 Login
          </button>
        </form>

        <p>📚 Manage • Learn • Grow</p>
      </div>
    </div>
  );
}

export default Login;