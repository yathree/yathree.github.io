import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { CompliteLicenceComponent } from './complite-licence/complite-licence.component';
import { PvcRoutingModule } from './pvc-routing.module';
@NgModule({
  declarations: [
    CompliteLicenceComponent
  ],
  imports: [CommonModule, PvcRoutingModule, SharedModule],
})
export class PvcModule {}
