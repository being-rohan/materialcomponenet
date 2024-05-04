import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';






let arr = [
  MatSnackBarModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatNativeDateModule,
  MatCardModule,
  MatSelectModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatDialogModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...arr
  ],
  exports:[
    ...arr
  ]
})
export class MatetrialModule { }
