import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './menu-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [MenuCardComponent],
})
export class MenuCardModule {}
