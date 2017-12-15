import { TestBed, inject } from '@angular/core/testing';

import { SearchGitRepoService } from './search-git-repo.service';

describe('SearchGitRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchGitRepoService]
    });
  });

  it('should be created', inject([SearchGitRepoService], (service: SearchGitRepoService) => {
    expect(service).toBeTruthy();
  }));
});
