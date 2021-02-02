import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultComponent } from './pages/consult/consult.component';
import { ServiceComponent } from './pages/service/service.component';


const routes: Routes = [
  { path: 'services', component: ServiceComponent },
  { path: 'consult', component: ConsultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
