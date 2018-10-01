import { TestBed, inject } from '@angular/core/testing';
import { InitialiseService } from './initialise.service';

describe('InitialiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialiseService]
    });
  });

  it('should be created', inject([InitialiseService], (service: InitialiseService) => {
    expect(service).toBeTruthy();
  }));
});
