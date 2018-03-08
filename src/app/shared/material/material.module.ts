import { NgModule } from '@angular/core';
import {
  MatGridListModule,
  MatMenuModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTabsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTabsModule,
    MatSelectModule
  ],
  exports: [
    MatGridListModule,
    MatMenuModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTabsModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
