/** @format */

import React, { useState } from "react";
import styles from "./MailModel.module.css";

const MailModel = () => {
  const [name, setName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [subject, setSubject] = useState("");
  const [preferableSlot, setPreferableSlot] = useState("");
  const [secondPreferableSlot, setSecondPreferableSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoUrl = `mailto:shivbhu2112564@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}  LinkedIn: ${linkedIn}  Subject: ${subject}  Preferable Slot: ${preferableSlot}  Second Preferable Slot: ${secondPreferableSlot}`
    )}`;

    window.open(mailtoUrl, "_blank");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.action_button}>
        <span>Back</span>
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}>
        <div>
          <h3>Name</h3>
          <input
            type="text"
            placeholder="Type Here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h3>LinkedIn</h3>
          <input
            type="text"
            placeholder="Type Here..."
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </div>
        <div>
          <h3>Subject</h3>
          <input
            type="text"
            placeholder="Type Here..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <h3>Preferable Slot</h3>
          <input
            type="text"
            placeholder="Type Here..."
            value={preferableSlot}
            onChange={(e) => setPreferableSlot(e.target.value)}
          />
        </div>
        <div>
          <h3>Second Preferable Slot</h3>
          <input
            type="text"
            placeholder="Type Here..."
            value={secondPreferableSlot}
            onChange={(e) => setSecondPreferableSlot(e.target.value)}
          />
        </div>
      </form>
      <div className={styles.submit_button}>
        <span onClick={handleSubmit}>Submit</span>
      </div>
    </div>
  );
};

export default MailModel;
