import { Component, OnInit } from '@angular/core';
import { SearchGitRepoService} from '../shared/search/search-git-repo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  searchResults: any [];
  flag = false;
  constructor( private searchGitRepoService: SearchGitRepoService) { }

  ngOnInit() {}
  search(): void {
    this.searchGitRepoService.getData(this.query).subscribe(
      data => {
        if ( data.length !== 0) {
          this.searchResults = data;
          console.log(this.searchResults);
          this.flag = true; }
      },
      error => console.log(error)
    );
  }

}
