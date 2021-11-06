package com.codespecialist.todoapp.repositories;

import com.codespecialist.todoapp.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
