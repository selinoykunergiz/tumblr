import { NgModule } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: CommonComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class CommonRoutingModule { }
