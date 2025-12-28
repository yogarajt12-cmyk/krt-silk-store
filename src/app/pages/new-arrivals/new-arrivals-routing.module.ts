import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivals } from './new-arrivals/new-arrivals';

const routes: Routes = [
  { path: '', component: NewArrivals }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArrivalsRoutingModule {}
