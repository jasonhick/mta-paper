import { NgModule } from '@angular/core';

import {
    MatStepperModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [MatStepperModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule],
    exports: [MatStepperModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule]
})
export class MaterialModule {}
