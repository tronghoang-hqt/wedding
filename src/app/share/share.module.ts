import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import { MatCarouselModule } from 'ng-mat-carousel';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    A11yModule,
    MatCarouselModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports:[
    A11yModule,
    MatCarouselModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ShareModule { }
