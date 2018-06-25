import { TestBed, inject } from '@angular/core/testing';

import { BandasService } from './bandas.service';

describe('BandasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandasService]
    });
  });

  it('should be created', inject([BandasService], (service: BandasService) => {
    expect(service).toBeTruthy();
  }));
});
