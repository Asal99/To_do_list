package com.example.todolist.Controller;



import com.example.todolist.model.Task;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*") // Allows frontend to access this backend
public class TaskController {
    private final List<Task> tasks = new ArrayList<>();
    private int taskIdCounter = 1;

    @GetMapping
    public List<Task> getTasks() {
        return tasks;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        task.setId(taskIdCounter++);
        tasks.add(task);
        return task;
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        tasks.removeIf(task -> task.getId() == id);
    }
}

