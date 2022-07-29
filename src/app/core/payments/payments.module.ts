import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

const routes: Route[] = [
    {
        path: '',
        component: PaymentsComponent
    }
]

@NgModule({
    declarations: [PaymentsComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    exports: [],
})
export class PaymentsModule { }