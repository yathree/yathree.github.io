import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { CC_and_STRRoutingModule } from './cc_str-routing.module';
import { ComplitedExamComponent } from './complited-exam/complited-exam.component';
import { SrdComponent } from './complited-exam/srd/srd.component';
import { CcdComponent } from './complited-exam/ccd/ccd.component';
import { CcPvcComponent } from './complited-exam/cc-pvc/cc-pvc.component';
@NgModule({
  declarations: [
    ComplitedExamComponent,
    SrdComponent,
    CcdComponent,
    CcPvcComponent,
  ],
  imports: [CommonModule,CC_and_STRRoutingModule, SharedModule],
})
export class CC_STRModule {}
