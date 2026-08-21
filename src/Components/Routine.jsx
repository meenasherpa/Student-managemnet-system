import { useState } from "react";

function Routine() {
  const [routine, setRoutine] = useState({
    day: "",
    time: "",
    className: "",
    subject: "",
    teacher: "",
    room: "",
  });

  const [routines, setRoutines] = useState([
    {
      day: "Sunday",
      time: "10:00 - 10:45",
      className: "10",
      subject: "Mathematics",
      teacher: "Mr. Rajesh Thapa",
      room: "101",
    },
    {
      day: "Sunday",
      time: "10:45 - 11:30",
      className: "10",
      subject: "English",
      teacher: "Mrs. Anisha Karki",
      room: "102",
    },
    {
      day: "Monday",
      time: "10:00 - 10:45",
      className: "10",
      subject: "Science",
      teacher: "Mr. Suman Adhikari",
      room: "103",
    },
  ]);

  const handleChange = (e) => {
    setRoutine({
      ...routine,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRoutines([...routines, routine]);

    setRoutine({
      day: "",
      time: "",
      className: "",
      subject: "",
      teacher: "",
      room: "",
    });
  };

  return (
    <div>
      <h1>🕐 School Routine</h1>
      <p>Manage the daily school class schedule.</p>

      <form className="form" onSubmit={handleSubmit}>
        <h2>➕ Add Routine</h2>

        <label>📅 Day</label>
        <select
          name="day"
          value={routine.day}
          onChange={handleChange}
          required
        >
          <option value="">Select Day</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>

        <label>🕐 Time</label>
        <input
          type="text"
          name="time"
          placeholder="Example: 10:00 - 10:45"
          value={routine.time}
          onChange={handleChange}
          required
        />

        <label>🏫 Class</label>
        <select
          name="className"
          value={routine.className}
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
          value={routine.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
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
          value={routine.teacher}
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

        <label>🏠 Room</label>
        <input
          type="text"
          name="room"
          placeholder="Example: Room 101"
          value={routine.room}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          💾 Add Routine
        </button>
      </form>

      <div className="records">
        <h2>📋 Weekly Routine</h2>

        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Room</th>
            </tr>
          </thead>

          <tbody>
            {routines.map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.time}</td>
                <td>{item.className}</td>
                <td>{item.subject}</td>
                <td>{item.teacher}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Routine;