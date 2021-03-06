import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlineitemComponent } from './addlineitem/addlineitem.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';


const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'project/detail/:id', component: ProjectdetailComponent },
  { path: 'project/detail/:id/addlineitem', component: AddlineitemComponent },
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
