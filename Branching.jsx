// src/Branching.jsx

import React, { useState } from "react";

function Branching() {
  // Course Registration state
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courses, setCourses] = useState([]);

  // Event Calendar state
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [events, setEvents] = useState([]);

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!courseName.trim() || !courseCode.trim()) return;

    setCourses([
      ...courses,
      { id: Date.now(), name: courseName.trim(), code: courseCode.trim() },
    ]);

    setCourseName("");
    setCourseCode("");
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!eventTitle.trim() || !eventDate.trim()) return;

    setEvents([
      ...events,
      { id: Date.now(), title: eventTitle.trim(), date: eventDate },
    ]);

    setEventTitle("");
    setEventDate("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1>College Portal – Branching Example</h1>

      {/* Course Registration Feature */}
      <section
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2>Course Registration</h2>
        <form onSubmit={handleAddCourse}>
          <div style={{ marginBottom: "8px" }}>
            <label>
              Course Name:{" "}
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="e.g. Computer Networks"
              />
            </label>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label>
              Course Code:{" "}
              <input
                type="text"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="e.g. CS401"
              />
            </label>
          </div>
          <button type="submit">Add Course</button>
        </form>

        <h3>Registered Courses</h3>
        {courses.length === 0 ? (
          <p>No courses registered yet.</p>
        ) : (
          <ul>
            {courses.map((c) => (
              <li key={c.id}>
                {c.code} — {c.name}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Event Calendar Feature */}
      <section
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h2>Event Calendar</h2>
        <form onSubmit={handleAddEvent}>
          <div style={{ marginBottom: "8px" }}>
            <label>
              Event Title:{" "}
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="e.g. Tech Fest"
              />
            </label>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label>
              Event Date:{" "}
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Add Event</button>
        </form>

        <h3>Upcoming Events</h3>
        {events.length === 0 ? (
          <p>No events added yet.</p>
        ) : (
          <ul>
            {events.map((ev) => (
              <li key={ev.id}>
                {ev.date} — {ev.title}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Branching;
