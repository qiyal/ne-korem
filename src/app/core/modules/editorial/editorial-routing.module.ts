import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorialComponent} from '../../components/editorial/editorial.component';
import {EditorialDetailsComponent} from '../../components/editorial/editorial-details/editorial-details.component';
import {EditorialCreateComponent} from '../../components/editorial/editorial-create/editorial-create.component';

const routes: Routes = [
  {
    path: '',
    component: EditorialComponent
  },
  {
    path: ':id',
    component: EditorialDetailsComponent
  },
  {
    path: ':id/edit',
    component: EditorialCreateComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditorialRoutingModule { }
