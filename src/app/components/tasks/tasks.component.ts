import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskForm: FormGroup;
  tasks: Task[];
  editState: boolean = false;
  taskToEdit: Task;
  loading: boolean;

  constructor(public taskService: TaskService, private formBuilder: FormBuilder) { 
    this.loading = true;
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      
      if(this.tasks){
        this.loading = false;
      }
    });

    this.taskForm = this.formBuilder.group({
      'fecha': ['', [
        Validators.required,
      ]
      ],
      'descripcion': ['', [
        Validators.required,
      ]
      ]
    });
  }

  deleteTask(event, task) {
    const response = confirm('¿Deseas eliminar esta tarea?');
    if (response ) {
      this.taskService.deleteTask(task);
    }
    return;
  }

  editTask(event, task) {
    this.editState = !this.editState;
    this.taskToEdit = task;
  }

  updateTask(task) {
    this.taskService.updateTask(task);
    this.taskToEdit = null;
    this.editState = false;
  }

}
