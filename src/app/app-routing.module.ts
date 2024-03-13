import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeHomeComponent } from './pages/se-home/se-home.component';
import { SeAbouteUsComponent } from './pages/se-aboute-us/se-aboute-us.component';
import { SeContactUsComponent } from './pages/se-contact-us/se-contact-us.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'home'}, 
  {path:'home', component:SeHomeComponent},
  {path:'about-us', component:SeAbouteUsComponent},
  {path:'contact-us', component:SeContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
