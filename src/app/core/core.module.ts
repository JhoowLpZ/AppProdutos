import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        // NgbModule,
        // CommonModule,
        BrowserModule
    ],
    exports: [
        LayoutComponent
    ],
    providers: []
})
export class CoreModule { }
