import React, { useState } from 'react';

export default function StudentForm({ initial, onSubmit, onCancel }) {
  const [firstName, setFirstName] = useState(initial?.firstName ?? '');
  const [lastName, setLastName] = useState(initial?.lastName ?? '');
  const [email, setEmail] = useState(initial?.email ?? '');
  const [dob, setDob] = useState(initial?.dob ?? '');
  const [major, setMajor] = useState(initial?.major ?? '');
  const [gpa, setGpa] = useState(initial?.gpa ?? '');

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      firstName, lastName, email, dob: dob || null, major, gpa: gpa ? parseFloat(gpa) : null
    });
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <input required placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input required placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
      <input required placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="DOB (YYYY-MM-DD)" value={dob} onChange={e => setDob(e.target.value)} />
      <input placeholder="Major" value={major} onChange={e => setMajor(e.target.value)} />
      <input placeholder="GPA" type="number" step="0.01" min="0" max="4" value={gpa} onChange={e => setGpa(e.target.value)} />
      <div>
        <button type="submit">{initial ? 'Update' : 'Create'}</button>{' '}
        {initial && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}