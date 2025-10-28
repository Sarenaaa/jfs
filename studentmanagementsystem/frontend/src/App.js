import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get('/api/students');
    setStudents(res.data);
  };

  useEffect(() => { fetchStudents(); }, []);

  const onCreate = async (student) => {
    await axios.post('/api/students', student);
    fetchStudents();
  };

  const onUpdate = async (id, student) => {
    await axios.put(`/api/students/${id}`, student);
    setEditing(null);
    fetchStudents();
  };

  const onDelete = async (id) => {
    if (!window.confirm('Delete student?')) return;
    await axios.delete(`/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Student Management</h1>
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ flex: 1 }}>
          <h2>{editing ? 'Edit Student' : 'Add Student'}</h2>
          <StudentForm
            key={editing ? editing.id : 'new'}
            initial={editing}
            onSubmit={editing ? (data) => onUpdate(editing.id, data) : onCreate}
            onCancel={() => setEditing(null)}
          />
        </div>
        <div style={{ flex: 2 }}>
          <h2>Students</h2>
          <StudentList
            students={students}
            onEdit={(s) => setEditing(s)}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;