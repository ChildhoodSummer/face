import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppService } from '../app.service';

@Injectable()
export class CardService {

  constructor(
    public http: Http,
    public apps: AppService
  ) { }

  public data = this.apps.data;
  public ajaxUrl = this.apps.ajaxUrl;
  public extractData = this.apps.extractData;
  public handleError = this.apps.handleError;

  getCardInfo(openid: string) {//获取用户信息
    let Data = this.data;
    Data.replaceAll;
    Data.set('openid', openid);
    Data.set('method', 'getuseraccount');
    return this.http
      .post(this.ajaxUrl, Data)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteCard(openid: string, roomid: any) {//解绑
    let Data = this.data;
    Data.set('openid', openid);
    Data.set('method', 'unbindingwarmcard');
    Data.set('roomid', roomid);
    return this.http
      .post(this.ajaxUrl, Data)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getCardMethod(openid: string, custid: string) {//获取绑卡方式
    let Data = this.data;
    Data.set('openid', openid);
    Data.set('method', 'companytcardmode');
    Data.set('custid', custid);
    return this.http
      .post(this.ajaxUrl, Data)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getCompany(openid: string) {//获取公司信息
    let Data = this.data;
    Data.set('openid', openid);
    Data.set('method', 'getcompany');
    return this.http
      .post(this.ajaxUrl, Data)
      .map(this.extractData)
      .catch(this.handleError)
  }

  addCardBynum(openid: string, cardnum: any, custid: string, companyname: string, alias: string) {//卡号绑卡
    let Data = this.data;
    Data.set('openid', openid);
    Data.set('method', 'bindingwarmcard');
    Data.set('cardnum', cardnum);
    Data.set('custid', custid);
    Data.set('companyname', companyname);
    Data.set('alias', alias);
    return this.http
      .post(this.ajaxUrl, Data)
      .map(this.extractData)
      .catch(this.handleError)
  }

}
