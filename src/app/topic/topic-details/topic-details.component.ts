import { Router } from '@angular/router';
import { TopicDataService } from './../topic-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../topic.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  @Output() public newTopic = new EventEmitter<Topic>();
  public topic: FormGroup;

  constructor(private fb: FormBuilder, private _topicDataService: TopicDataService, private _router: Router) { }

  ngOnInit() {
    this.topic = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      vraag: ['', [Validators.required, Validators.minLength(2)]]
    });    
  }

  onSubmit() {
    const topic = new Topic(this.topic.value.name, this.topic.value.vraag, "");
    this._topicDataService.addNewTopic(topic).subscribe(item => {
    });
    this._router.navigate(['topic']);
  }

  
}
