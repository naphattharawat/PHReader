import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-map',
  templateUrl: 'detail-map.html',
})
export class DetailMapPage {
  item=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMapPage');
  }

}
