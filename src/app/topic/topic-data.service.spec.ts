/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopicDataService } from './topic-data.service';

describe('TopicDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicDataService]
    });
  });

  it('should ...', inject([TopicDataService], (service: TopicDataService) => {
    expect(service).toBeTruthy();
  }));
});
