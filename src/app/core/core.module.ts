import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        LayoutComponent,
        BreadcrumbComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
    ],
    exports: [
        LayoutComponent,
        BreadcrumbComponent
    ],
    providers: []
})
export class CoreModule { }
