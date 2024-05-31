import { TestBed } from '@angular/core/testing';

import { TeslaCarService } from './tesla-car.service';
import {  HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeslaCarService', () => {
  let service: TeslaCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(TeslaCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
