"use client";
import React, { useState } from "react";

function CreateEventPage() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result); // Process the response
    } catch (error) {
      console.error("Failed to create event", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Event</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
}

export default CreateEventPage;
