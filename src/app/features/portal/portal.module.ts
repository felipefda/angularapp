import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PortalRoutingModule } from './portal-routing.module';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [HomeComponentComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
