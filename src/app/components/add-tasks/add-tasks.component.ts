import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService } from "../../services/task.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  newtaskForm: FormGroup;

  task: Task = {
    fecha: '',
    descripcion: ''
  };

  constructor(public taskService: TaskService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newtaskForm = this.formBuilder.group({
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

  onSubmit() {
    if (this.task.fecha != '' && this.task.descripcion) {
      this.taskService.addTask(this.task);
      this.task.fecha = '';
      this.task.descripcion = '';
    }
  }

}
