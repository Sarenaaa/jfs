package com.example.student.service;

import com.example.student.entity.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentService {
  private final StudentRepository repository;

  public StudentService(StudentRepository repository) {
    this.repository = repository;
  }

  public List<Student> findAll() {
    return repository.findAll();
  }

  public Optional<Student> findById(Long id) {
    return repository.findById(id);
  }

  public Student create(Student s) {
    return repository.save(s);
  }

  public Student update(Long id, Student updated) {
    return repository.findById(id).map(existing -> {
      existing.setFirstName(updated.getFirstName());
      existing.setLastName(updated.getLastName());
      existing.setEmail(updated.getEmail());
      existing.setDob(updated.getDob());
      existing.setMajor(updated.getMajor());
      existing.setGpa(updated.getGpa());
      return repository.save(existing);
    }).orElseThrow(() -> new RuntimeException("Student not found"));
  }

  public void delete(Long id) {
    repository.deleteById(id);
  }
}