import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  APIURL :string ="http://10.157.136.179:3001/search/";
  // APIURL :any ="http://api.mmis.moph.go.th/nmpcd/search/";
  
  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');
  }
  async searchGtin(gtin: any) {
    let resp: any = await this.http.get(this.APIURL+'gtin?q=' + gtin).toPromise();
    return resp.json();
  }
  // async searchGtinName(gtin: any) {
  //   let resp: any = await this.http.get(this.APIURL+'gtin/name?q=' + gtin).toPromise();
  //   return resp.json();
  // }


}
