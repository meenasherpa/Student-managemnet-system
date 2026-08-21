import { useState } from "react";
import "./App.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
 

  /* =========================
     SUBJECTS
  ========================= */

  const subjects = [
    {
      name: "Object Oriented Programming",
      teacher: "Ram Sharma",
    },
    {
      name: "Mathematics",
      teacher: "Gita Thapa",
    },
    {
      name: "Data Communication",
      teacher: "Hari Karki",
    },
    {
      name: "Web Technology",
      teacher: "Ram Sharma",
    },
    {
      name: "Database Management System",
      teacher: "Gita Thapa",
    },
  ];

  /* =========================
     ATTENDANCE
  ========================= */

  const attendance = [
    {
      name: "Object Oriented Programming",
      percentage: 85,
    },
    {
      name: "Mathematics",
      percentage: 78,
    },
    {
      name: "Data Communication",
      percentage: 90,
    },
    {
      name: "Web Technology",
      percentage: 82,
    },
    {
      name: "Database Management System",
      percentage: 88,
    },
  ];

  /* =========================
     ROUTINE
  ========================= */

  const routine = [
    {
      time: "6:00 - 7:00",
      subject: "Object Oriented Programming",
      teacher: "Ram Sharma",
    },
    {
      time: "7:00 - 8:00",
      subject: "Mathematics",
      teacher: "Gita Thapa",
    },
    {
      time: "8:00 - 9:00",
      subject: "Data Communication",
      teacher: "Hari Karki",
    },
    {
      time: "9:00 - 10:00",
      subject: "Web Technology",
      teacher: "Ram Sharma",
    },
    {
      time: "10:00 - 11:00",
      subject: "Database Management System",
      teacher: "Gita Thapa",
    },
  ];

  /* =========================
     STUDENTS
  ========================= */

  const students = [
    {
      id: 1,
      name: "Sita Sharma",
      roll: "001",
      semester: "1st",
    },
    {
      id: 2,
      name: "Ram Thapa",
      roll: "002",
      semester: "1st",
    },
    {
      id: 3,
      name: "Hari Karki",
      roll: "003",
      semester: "1st",
    },
    {
      id: 4,
      name: "Gita Magar",
      roll: "004",
      semester: "1st",
    },
    {
      id: 5,
      name: "Asha Gurung",
      roll: "005",
      semester: "1st",
    },
  ];

  /* =========================
     RESULTS
  ========================= */

  const results = [
    {
      subject: "Object Oriented Programming",
      marks: 85,
      grade: "A",
      gpa: 3.6,
    },
    {
      subject: "Mathematics",
      marks: 78,
      grade: "B+",
      gpa: 3.2,
    },
    {
      subject: "Data Communication",
      marks: 90,
      grade: "A+",
      gpa: 4.0,
    },
    {
      subject: "Web Technology",
      marks: 82,
      grade: "A",
      gpa: 3.6,
    },
    {
      subject: "Database Management System",
      marks: 88,
      grade: "A",
      gpa: 3.8,
    },
  ];

  /* =========================
     LOGIN
  ========================= */

  if (!isLoggedIn) {
    return (
      <div className="login-page">

        <div className="login-box">

          <div className="login-icon">
            🧑‍🎓
          </div>

          <h1>Texas International</h1>

          <p>
            Welcome back! Please login to continue.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
          >

            <div className="input-box">
              <span>👤</span>

              <input
                type="text"
                placeholder="Username"
                required
              />
            </div>

            <div className="input-box">
              <span>🔒</span>

              <input
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <button
              className="login-btn"
              type="submit"
            >
              🚀 Login
            </button>

          </form>

        </div>

      </div>
    );
  }

  return (
    <div className="app">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="sidebar">

        <div className="logo">
          🧑‍🎓

          <span>
           Texas
            <br />
            International
            college
          </span>
        </div>

        <nav>

          <button
            onClick={() =>
              setActivePage("Dashboard")
            }
          >
            🏠
            <span>Dashboard</span>
          </button>

          <button
            onClick={() =>
              setActivePage("Students")
            }
          >
            👨‍🎓
            <span>Students</span>
          </button>

          <button
            onClick={() =>
              setActivePage("Subjects")
            }
          >
            📚
            <span>Subjects</span>
          </button>

          <button
            onClick={() =>
              setActivePage("Attendance")
            }
          >
            📊
            <span>Attendance</span>
          </button>

          <button
            onClick={() =>
              setActivePage("Routine")
            }
          >
            🕐
            <span>Routine</span>
          </button>

          <button
            onClick={() =>
              setActivePage("Results")
            }
          >
            🏆
            <span>Results</span>
          </button>

        </nav>

        <button
          className="logout-btn"
          onClick={() => {
            setIsLoggedIn(false);
            setActivePage("Dashboard");
          }}
        >
          🚪
          <span>Logout</span>
        </button>

      </aside>

      {/* =========================
          MAIN
      ========================= */}

      <main className="main">

        {/* TOPBAR */}

        <div className="topbar">

          <div>

            <h1>
              {activePage}
            </h1>

            
          </div>

          <div className="profile">
            👩‍🎓
            <span>Student</span>
          </div>

        </div>

        {/* =========================
            DASHBOARD
        ========================= */}

        {activePage === "Dashboard" && (
          <>

            <div className="dashboard">

              <div className="card">

                <div className="card-icon">
                  👨‍🎓
                </div>

                <div>
                  <h3>Total Students</h3>
                  <p>500</p>
                </div>

              </div>

              <div className="card">

                <div className="card-icon">
                  📚
                </div>

                <div>
                  <h3>Total Subjects</h3>
                  <p>5</p>
                </div>

              </div>

              <div className="card">

                <div className="card-icon">
                  📊
                </div>

                <div>
                  <h3>Average Attendance</h3>
                  <p>84.6%</p>
                </div>

              </div>

              <div className="card">

                <div className="card-icon">
                  🏆
                </div>

                <div>
                  <h3>Average Result</h3>
                  <p>84.6%</p>
                </div>

              </div>

            </div>

            <div className="welcome-card">

              <h2>
                🎓 Welcome to Texas Management System
              </h2>

              <p>
                Manage students, subjects, attendance,
                routine and results easily from one place.
              </p>

            </div>

          </>
        )}

        {/* =========================
            STUDENTS
        ========================= */}

        {activePage === "Students" && (
          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Roll No.</th>
                  <th>Semester</th>
                </tr>

              </thead>

              <tbody>

                {students.map((student) => (
                  <tr key={student.id}>

                    <td>
                      {student.id}
                    </td>

                    <td>
                      👨‍🎓 {student.name}
                    </td>

                    <td>
                      {student.roll}
                    </td>

                    <td>
                      {student.semester}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

            <p className="total-note">
              👥 Total Students:
              <strong>500</strong>
            </p>

          </div>
        )}

        {/* =========================
            SUBJECTS
        ========================= */}

        {activePage === "Subjects" && (
          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>📚 Subject</th>
                  <th>👨‍🏫 Teacher Name</th>
                </tr>

              </thead>

              <tbody>

                {subjects.map((subject, index) => (
                  <tr key={index}>

                    <td>
                      {subject.name}
                    </td>

                    <td>
                      {subject.teacher}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* =========================
            ATTENDANCE
        ========================= */}

        {activePage === "Attendance" && (
          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>📚 Subject</th>
                  <th>📊 Attendance</th>
                </tr>

              </thead>

              <tbody>

                {attendance.map((item, index) => (
                  <tr key={index}>

                    <td>
                      {item.name}
                    </td>

                    <td>
                      <strong>
                        {item.percentage}%
                      </strong>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* =========================
            ROUTINE
        ========================= */}

        {activePage === "Routine" && (
          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>🕐 Time</th>
                  <th>📚 Subject</th>
                  <th>👨‍🏫 Teacher</th>
                </tr>

              </thead>

              <tbody>

                {routine.map((item, index) => (
                  <tr key={index}>

                    <td>
                      {item.time}
                    </td>

                    <td>
                      {item.subject}
                    </td>

                    <td>
                      {item.teacher}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* =========================
            RESULTS
        ========================= */}

        {activePage === "Results" && (
          <div className="results-box">

            <div className="results-header">

              <h2>
                🏆 Results
              </h2>

            </div>

            <div className="result-table">

              <table>

                <thead>

                  <tr>
                    <th>📚 Subject</th>
                    <th>📝 Marks</th>
                    <th>🏆 Grade</th>
                    <th>📊 GPA</th>
                  </tr>

                </thead>

                <tbody>

                  {results.map((result, index) => (
                    <tr key={index}>

                      <td>
                        {result.subject}
                      </td>

                      <td>
                        {result.marks}
                      </td>

                      <td>
                        <span className="grade">
                          {result.grade}
                        </span>
                      </td>

                      <td>
                        {result.gpa.toFixed(1)}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

            {/* OVERALL GPA */}

            <div className="overall-gpa">

              <span>
                Overall GPA
              </span>

              <strong>
                3.64
              </strong>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}

export default App;