import { TopicDataService } from './topic-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Topic } from './topic.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TopicResolver implements Resolve< Topic > {
    constructor(private topicService: TopicDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topic> {
        return this.topicService.getTopic(route.params['id']);
    }
}
