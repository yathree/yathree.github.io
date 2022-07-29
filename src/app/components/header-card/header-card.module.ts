import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './header-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeaderCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [HeaderCardComponent],
})
export class HeaderCardModule {}
