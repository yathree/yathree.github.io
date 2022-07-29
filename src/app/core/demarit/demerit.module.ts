import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DemeritRoutingModule} from './demarit-routing.module';
import { StudentLicenseComponent } from './student-license/student-license.component';
@NgModule({
  declarations: [
    StudentLicenseComponent
  ],
  imports: [CommonModule, DemeritRoutingModule, SharedModule],
})
export class DemeritModule {}
