import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {path: 'users', component:UsersComponent},
  {path: 'user',children:[
    {path:'', component: UserFormComponent}, // localhost/user
    {path:':id', component: UserFormComponent} // localhost/user/12
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
