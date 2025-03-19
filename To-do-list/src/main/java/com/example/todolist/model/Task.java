package com.example.todolist.model;

import lombok.Data;

@Data
public class Task {
    private int id;
    private String name;
    private boolean completed;
}
