import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule, MatPaginatorModule, MatChipsModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  declarations: []
})
export class MatAppModule { }
