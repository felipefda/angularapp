import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { MainLayoutComponent } from "@app/shared/layout/main-layout/main-layout.component";


const routes: Routes = [
    {
        path: '',
        component : MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: AccountListComponent,
            },
            {
                path: 'form/:id',
                component: AccountFormComponent,
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}