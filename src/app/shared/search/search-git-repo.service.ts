import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SearchGitRepoService {
  uri: string;
  constructor(private http: Http) {}
  getData(name) {
    this.uri = 'https://api.github.com/users/' + name + '/repos';
    return this.http.get(this.uri).map(res => res.json());
  }

}
