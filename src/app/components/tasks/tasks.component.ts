import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  editState: boolean = false;
  taskToEdit: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
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
