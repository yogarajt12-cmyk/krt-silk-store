import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { Header } from './header/header';
import { ProductCard } from './product-card/product-card';
import { SupportWidget } from './support-widget/support-widget';

const MATERIALS = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatBadgeModule,
  RouterModule
]
@NgModule({
  declarations: [Header, ProductCard, SupportWidget],
  imports: [
    CommonModule,
    MATERIALS
  ],
  exports: [Header,ProductCard,SupportWidget]
})
export class SharedModule { }
