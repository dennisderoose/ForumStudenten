import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicComponent } from 'app/topic/topic/topic.component';
import { TopicDetailsComponent } from 'app/topic/topic-details/topic-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TopicDataService } from './topic-data.service';
import { TopicResolver } from './topic-resolver.service';
import { OpmerkingComponent } from './opmerking/opmerking.component';


const routes = [
  { path: 'topic-details', component:  TopicDetailsComponent}
];

@NgModule({
  declarations: [
    TopicComponent,
    TopicDetailsComponent,
    OpmerkingComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TopicDataService,
    TopicResolver
  ]
})
export class TopicModule { }
