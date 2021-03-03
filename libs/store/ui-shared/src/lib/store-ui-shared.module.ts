import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class StoreUiSharedModule {}
