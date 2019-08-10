import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
