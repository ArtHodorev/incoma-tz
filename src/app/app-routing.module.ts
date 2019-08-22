import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilterPageComponent} from './filter-page/filter-page.component';
import {ResultPageComponent} from './result-page/result-page.component';

const routes: Routes = [
  {path: '', component: FilterPageComponent},
  {path: 'result', component: ResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
