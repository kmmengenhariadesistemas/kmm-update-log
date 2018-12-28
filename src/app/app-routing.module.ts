import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateListComponent } from './update-list/update-list.component';
import { PatchDetailComponent } from './patch-detail/patch-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'update/429', pathMatch: 'full'},
  {path: 'update/:id',component: UpdateListComponent},
  {path: 'update/detail/:id',component: PatchDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
