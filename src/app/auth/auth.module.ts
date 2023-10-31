import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from "../dashboard/dashboard.module";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule, SharedModule,
        DashboardModule, RouterModule
    ]
})
export class AuthModule { }