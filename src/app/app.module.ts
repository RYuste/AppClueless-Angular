import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TaskService } from './services/task.service';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTasksComponent,
    InicioComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'AppClueless')
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }