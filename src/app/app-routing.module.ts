import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'view/:id', component: QAVComponent},
  // { path: 'data', component: DataTableComponent},
  // { path: '' , redirectTo: '/data', pathMatch: 'full'},
  // { path: '**' , component: DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
