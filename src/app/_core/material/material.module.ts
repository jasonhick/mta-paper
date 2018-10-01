import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    exports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class MaterialModule {}
