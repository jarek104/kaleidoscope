import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaleidoscopeComponent } from './kaleidoscope/kaleidoscope.component';


const routes: Routes = [
  // { path: 'view/:id', component: QAVComponent},
  { path: 'kaleidoscope', component: KaleidoscopeComponent},
  { path: '' , redirectTo: '/kaleidoscope', pathMatch: 'full'},
  { path: '**' , component: KaleidoscopeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
