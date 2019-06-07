import { Component, OnInit } from '@angular/core';
import { Form } from '../form.model';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-nano-degree-list',
  templateUrl: './nano-degree-list.component.html',
  styleUrls: ['./nano-degree-list.component.css']
})
export class NanoDegreeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
