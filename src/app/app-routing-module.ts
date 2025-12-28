import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-module')
        .then(m => m.HomeModule)
  },
  {
    path: 'new-arrivals',
    loadChildren: () =>
      import('./pages/new-arrivals/new-arrivals-module')
        .then(m => m.NewArrivalsModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
