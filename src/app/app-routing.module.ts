import { WithoutSaveGuard } from './guards/without-save.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente protegido
import { AdminUserComponent }from './admin-user/admin-user.component';

const routes: Routes = [
  {
    path: 'adminUser',
    component: AdminUserComponent, canActivate: [WithoutSaveGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
