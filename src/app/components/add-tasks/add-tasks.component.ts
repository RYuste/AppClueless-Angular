import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  task: Task = {
    fecha: '',
    descripcion: ''
  };

  constructor(public taskService: TaskService) { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.task.fecha != '' || this.task.descripcion){
      this.taskService.addTask(this.task);
      this.task.fecha = '';
      this.task.descripcion = '';
    }
  }
  
}
