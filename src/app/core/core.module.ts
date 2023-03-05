import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [SharedModule, RouterModule, CommonModule],
  exports: [ToolbarComponent],
})
export class CoreModule {}
