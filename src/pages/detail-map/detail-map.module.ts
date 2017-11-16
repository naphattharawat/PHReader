import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMapPage } from './detail-map';

@NgModule({
  declarations: [
    DetailMapPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailMapPage),
  ],
})
export class DetailMapPageModule {}
