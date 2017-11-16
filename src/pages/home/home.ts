import { DetailPage } from './../detail/detail';
import { SearchProvider } from './../../providers/search/search';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage { 
  items=[];
  query='';
  constructor(private loadingCtrl:LoadingController,public navCtrl: NavController,private barcodeScanner:BarcodeScanner,private searchProvider:SearchProvider) {
    
  }
  async scan()
  {
    this.barcodeScanner.scan().then((barcodeData) => {
      // alert(JSON.stringify(barcodeData))
        this.query=barcodeData.text;
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
        });
        loader.present();
        
        this.searchProvider.searchGtin(this.query)
        .then(rs=>{
          this.items=rs.results;
          loader.dismiss();
        })
        .catch(error=>{
          loader.dismiss();
        })
       
     }, (err) => {
         // An error occurred
     });
  }
  
  async search(event:any){
    let value=event.target.value || '';
    if(value.length>=4)
    {
      // let loader = this.loadingCtrl.create({
      //   content: "Please wait...",
      // });
      // loader.present();
      
      let rs=await this.searchProvider.searchGtin(value)
      this.items=rs.results;
      // loader.dismiss();
    }
    else this.items=[];
  }

  detail(item:any){
    this.navCtrl.push(DetailPage,item)
  }
  
}
