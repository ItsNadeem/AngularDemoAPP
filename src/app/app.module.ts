import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { SearchGitRepoService } from './shared/search/search-git-repo.service';


const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule
  ],
  providers: [SearchGitRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
