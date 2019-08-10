import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountFormComponent } from './account-form/account-form.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AccountListComponent, AccountFormComponent],
  imports: [
    CommonModule
    ,AccountRoutingModule
    ,CoreModule
    ,SharedModule
    ,MatTableModule
    ,MatIconModule
    ,FormsModule
		,ReactiveFormsModule
  ],
  providers:[
    FormBuilder
  ]
})
export class AccountModule { }
