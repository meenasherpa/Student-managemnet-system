import { useState } from "react";

function Attendance() {
  const [attendance, setAttendance] = useState({
    studentName: "",
    roll: "",
    className: "",
    subject: "",
    teacher: "",
    date: "",
    status: "",
  });

  const [records, setRecords] = useState([
    {
      studentName: "Sita Sharma",
      roll: "01",
      className: "10",
      subject: "Mathematics",
      teacher: "Mr. Rajesh Thapa",
      date: "2026-08-19",
      status: "Present",
    },
    {
      studentName: "Aarav Gurung",
      roll: "02",
      className: "10",
      subject: "Science",
      teacher: "Mrs. Anisha Karki",
      date: "2026-08-19",
      status: "Absent",
    },
    {
      studentName: "Pratik Shrestha",
      roll: "03",
      className: "10",
      subject: "English",
      teacher: "Mr. Suman Adhikari",
      date: "2026-08-19",
      status: "Present",
    },
  ]);

  const handleChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecords([...records, attendance]);

    setAttendance({
      studentName: "",
      roll: "",
      className: "",
      subject: "",
      teacher: "",
      date: "",
      status: "",
    });
  };

  return (
    <div>
      <h1>📅 Attendance</h1>

      <p>
        Record and manage student attendance.
      </p>

      {/* Attendance Form */}

      <form className="form" onSubmit={handleSubmit}>
        <h2>➕ Mark Attendance</h2>

        <label>👩‍🎓 Student Name</label>

        <select
          name="studentName"
          value={attendance.studentName}
          onChange={handleChange}
          required
        >
          <option value="">Select Student</option>
          <option value="Sita Sharma">
            Sita Sharma
          </option>
          <option value="Aarav Gurung">
            Aarav Gurung
          </option>
          <option value="Pratik Shrestha">
            Pratik Shrestha
          </option>
          <option value="Riya Tamang">
            Riya Tamang
          </option>
          <option value="Anish Magar">
            Anish Magar
          </option>
        </select>

        <label>🔢 Roll Number</label>

        <input
          type="text"
          name="roll"
          placeholder="Enter roll number"
          value={attendance.roll}
          onChange={handleChange}
          required
        />

        <label>🏫 Class</label>

        <select
          name="className"
          value={attendance.className}
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>

        <label>📚 Subject</label>

        <select
          name="subject"
          value={attendance.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select Subject</option>
          <option value="Mathematics">
            Mathematics
          </option>
          <option value="Science">
            Science
          </option>
          <option value="English">
            English
          </option>
          <option value="Computer Science">
            Computer Science
          </option>
          <option value="Social Studies">
            Social Studies
          </option>
        </select>

        <label>👨‍🏫 Teacher</label>

        <select
          name="teacher"
          value={attendance.teacher}
          onChange={handleChange}
          required
        >
          <option value="">Select Teacher</option>
          <option value="Mr. Rajesh Thapa">
            Mr. Rajesh Thapa
          </option>
          <option value="Mrs. Anisha Karki">
            Mrs. Anisha Karki
          </option>
          <option value="Mr. Suman Adhikari">
            Mr. Suman Adhikari
          </option>
          <option value="Ms. Priya Gurung">
            Ms. Priya Gurung
          </option>
        </select>

        <label>📅 Date</label>

        <input
          type="date"
          name="date"
          value={attendance.date}
          onChange={handleChange}
          required
        />

        <label>📊 Attendance Status</label>

        <select
          name="status"
          value={attendance.status}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Status
          </option>

          <option value="Present">
            ✅ Present
          </option>

          <option value="Absent">
            ❌ Absent
          </option>
        </select>

        <button
          type="submit"
          className="submit-button"
        >
          💾 Save Attendance
        </button>
      </form>

      {/* Attendance Records */}

      <div className="records">
        <h2>📋 Attendance Records</h2>

        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Roll</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.studentName}</td>
                <td>{record.roll}</td>
                <td>{record.className}</td>
                <td>{record.subject}</td>
                <td>{record.teacher}</td>
                <td>{record.date}</td>

                <td>
                  {record.status === "Present" ? (
                    <span className="present">
                      ✅ Present
                    </span>
                  ) : (
                    <span className="absent">
                      ❌ Absent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;