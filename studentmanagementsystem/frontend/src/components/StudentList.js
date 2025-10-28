import React from 'react';

export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Major</th><th>GPA</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr><td colSpan="6" style={{ textAlign: 'center' }}>No students</td></tr>
        ) : students.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.firstName} {s.lastName}</td>
            <td>{s.email}</td>
            <td>{s.major}</td>
            <td>{s.gpa ?? ''}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>{' '}
              <button onClick={() => onDelete(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}