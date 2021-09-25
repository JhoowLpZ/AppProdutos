import { NgModule } from '@angular/core';

import { UpperCaseDirective } from './utils/directives/uppercase.directive';

@NgModule({
    declarations: [
        UpperCaseDirective
    ],
    imports: [],
    exports: [
        UpperCaseDirective
    ],
    providers: []
})
export class SharedModule { }
