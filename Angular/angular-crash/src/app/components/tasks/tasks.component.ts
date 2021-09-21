import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService : TaskService){}
  tasks : Task[] = TASKS;


  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks => this.tasks = tasks)

  }

}
