import { TestBed } from '@angular/core/testing';

import { ObsproductosService } from './obsproductos.service';

describe('ObsproductosService', () => {
  let service: ObsproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
