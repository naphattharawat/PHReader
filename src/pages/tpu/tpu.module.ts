import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TpuPage } from './tpu';

@NgModule({
  declarations: [
    TpuPage,
  ],
  imports: [
    IonicPageModule.forChild(TpuPage),
  ],
})
export class TpuPageModule {}
