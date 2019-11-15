import { TestBed } from '@angular/core/testing';

import { TokenInterCeptorService } from './token-inter-ceptor.service';

describe('TokenInterCeptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenInterCeptorService = TestBed.get(TokenInterCeptorService);
    expect(service).toBeTruthy();
  });
});
