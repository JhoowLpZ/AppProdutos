import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './services/in-memory-data.service.ts';

import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        LayoutComponent,
        BreadcrumbComponent
    ],
    imports: [
        NgbModule,
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        NgbPaginationModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    exports: [
        LayoutComponent,
        BreadcrumbComponent
    ],
    providers: []
})
export class CoreModule { }
