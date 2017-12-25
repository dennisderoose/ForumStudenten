import { AuthenticationService } from '../user/authentication.service';
import { Opmerking } from './opmerking/opmerking.model';
import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicDataService {
  private _appUrl = '/webapptaak';
  private _topics;

  ///webapptaak/topics/:id

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  get topics(): Observable<Topic[]> {
    return this.http.get(`${this._appUrl}/topics`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(response => response.json().map(item => Topic.fromJSON(item)));

  }

  getTopic(id): Observable<Topic> {
    return this.http.get(`${this._appUrl}/topic/${id}`)
      .map(response => response.json()).map(item => Topic.fromJSON(item));
  }

  addNewTopic(rec): Observable<Topic> {
    return this.http.post(`${this._appUrl}/topics`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Topic.fromJSON(item));
  }

  updateTopic(rec,id): Observable<Topic> {
    console.log(rec);
    console.log(id);
    console.log(this.http.put(`${this._appUrl}/topics/${id}`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json()).map(item => Topic.fromJSON(item)))
    return this.http.put(`${this._appUrl}/topics/${id}`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json()).map(item => Topic.fromJSON(item));    
  }

  removeTopic(rec) {
    return this.http.delete(`${this._appUrl}/topic/${rec.id}`).map(res => res.json()).map(item => Topic.fromJSON(item));
  }

  addOpmerkingToTopic(opmerking: Opmerking, topic: Topic): Observable<Opmerking> {
    return this.http.post(`${this._appUrl}/topic/${topic.id}/opmerkingen`, opmerking)
      .map(res => res.json()).map(item => Opmerking.fromJSON(item));
  }

}
