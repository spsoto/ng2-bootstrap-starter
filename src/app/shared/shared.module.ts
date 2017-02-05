import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DefaultLayoutComponent, TopBarComponent, SidebarComponent
  ],
  declarations: [DefaultLayoutComponent, TopBarComponent, SidebarComponent]
})
export class SharedModule { }
