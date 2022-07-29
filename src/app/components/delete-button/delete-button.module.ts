import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeleteButtonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [DeleteButtonComponent],
})
export class DeleteButtonModule {}
