import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
    imports: [MatProgressSpinnerModule, FlexLayoutModule],
    exports: [LoadingSpinnerComponent],
    declarations: [LoadingSpinnerComponent],
})
export class LoadingSpinnerModule { }
