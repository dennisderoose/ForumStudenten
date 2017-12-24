import { TopicDataService } from '../topic-data.service';
import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Topic } from '../topic.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Opmerking } from 'app/topic/opmerking/opmerking.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ViewChildren } from '@angular/core/src/metadata/di';
import { QueryList } from '@angular/core/src/linker/query_list';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Output() model;

  @ViewChildren("title") 
  private elTitle : QueryList<any>; 

  private _topics: Topic[];
  public topictoevoegen: FormGroup;
  public uitloggenForum: FormGroup;
  public opmerkingtoevoegen: FormGroup;
  
    constructor(private fb: FormBuilder, private _topicDataService: TopicDataService, private _router: Router) {
    }

    /*ngAfterViewInit(){
      console.log(this.elTitle.nativeElement);
    } */

  
    ngOnInit() {
      this.topictoevoegen = this.fb.group({}); 
      this.uitloggenForum = this.fb.group({});     
      this.opmerkingtoevoegen = this.fb.group({
        opmerkingname: ['', [Validators.required, Validators.minLength(3)]],
        topic: ['', [Validators.required, Validators.minLength(3)]]
      });  
      this._topicDataService.topics.subscribe(items => this._topics = items);
    }
    get topics() {
      return this._topics;
    }
  
    removeTopic(topic: Topic) {
      this._topicDataService.removeTopic(topic).subscribe(item =>
        this._topics = this._topics.filter(val => item.id !== val.id)
      );
    }

    onSubmit() {
      this._router.navigate(['topic-details']);
    }
    uitloggen() {
      this._router.navigate(['logout']);
    } 

    opmerking(evnt) {
      //console.log(this.elTitle.toArray); 
      let teller = 0;
      let value = "";
      let name = "";
      this.elTitle.forEach(function(element) {
        if(element.nativeElement.value != "") {
          value = element.nativeElement.value
          name = element.nativeElement.name          
          teller ++;
        }

      });
      //updaten van json object
      if(teller == 1) {
        console.log(value);
        console.log(name);

        let topic;
        
        this._topics.forEach(function(element) {          
          if(element.name == name) {
            element.opmerkingen.push(new Opmerking(value));
            topic = element;
          }
        });
        console.log(topic);
        
        this._topicDataService.updateTopic(topic,name).subscribe(item => {
        });


      }
      /*for(var i=0; i<this.elTitle.length; i++) {7
        
      }*/
      //console.log(this.elTitle.nativeElement.name);
      console.log(this.opmerkingtoevoegen.value.opmerkingname);    
      let nextArray = [];
      /*const topic = new Topic("kop","hln");
      const opmerking = new Opmerking("klm");
      nextArray.push(opmerking);
      topic.opmerkingen = nextArray;
      this._topicDataService.addNewTopic(topic).subscribe(item => {
        const opmerking = topic.opmerkingen.map(opmerking =>
          this._topicDataService.addOpmerkingToTopic(opmerking, item));   
          
          Observable.forkJoin(...opmerking).subscribe( (opmerkingen: Opmerking[]) => {
            for (const ing of opmerkingen) {
              item.addIngredient(ing);
            }          
          });
      });*/  
    }   
}
