import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderCardModule } from '@components/header-card/header-card.module';
import { DeleteButtonModule } from '@components/delete-button/delete-button.module';
import { IconSpinnerModule } from '@app/components/icon-spinner/icon-spinnser.module';
import { LoadingSpinnerModule } from '@app/components/loading-spinner/loading-spinner.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonToggleModule,

    FlexLayoutModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    HeaderCardModule,
    DeleteButtonModule,
    MatProgressSpinnerModule,
    IconSpinnerModule,
    LoadingSpinnerModule,
  ],
})
export class SharedModule {}
