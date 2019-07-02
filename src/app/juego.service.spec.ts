import { TestBed } from '@angular/core/testing';

import { JuegoService } from './juego.service';

describe('JuegoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuegoService = TestBed.get(JuegoService);
    expect(service).toBeTruthy();
  });
});
