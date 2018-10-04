import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule],
  exports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule]
})
export class MaterialModule {}
