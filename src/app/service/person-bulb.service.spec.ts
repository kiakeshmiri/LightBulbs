import { TestBed, inject } from '@angular/core/testing';

import { PersonBulbService } from './person-bulb.service';

describe('PersonBulbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonBulbService]
    });
  });

  it('should be created', inject([PersonBulbService], (service: PersonBulbService) => {
    expect(service).toBeTruthy();
  }));
});
