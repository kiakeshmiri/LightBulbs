import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule,  MatChipsModule
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
    MatChipsModule
  ],
  declarations: []
})
export class MatAppModule { }
