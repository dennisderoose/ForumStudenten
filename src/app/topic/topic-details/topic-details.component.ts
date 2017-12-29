import { ActivatedRoute, Router } from '@angular/router';
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
  private sub: any;
  private user: string;


  constructor(private fb: FormBuilder, private _topicDataService: TopicDataService, private route: ActivatedRoute,  private _router: Router) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.user = params['user'] || "";
    });
    console.log(this.user);
    this.topic = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      vraag: ['', [Validators.required, Validators.minLength(2)]]
    });    
  }

  onSubmit() {
    const topic = new Topic(this.topic.value.name, this.topic.value.vraag, this.user);
    this._topicDataService.addNewTopic(topic).subscribe(item => {
    });
    this._router.navigate(['topic'], { queryParams: { user: this.user} });
  }

  
}
