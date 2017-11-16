import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');
  }
  async searchGtin(gtin: any) {
    let resp: any = await this.http.get('http://172.17.2.113:3001/search/gtin?q=' + gtin).toPromise();
    return resp.json();
  }

}
