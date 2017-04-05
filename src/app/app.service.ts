import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { LocalStorage } from './local.storage';


@Injectable()
export class AppService {

  constructor(
    public http: Http,
    public ls: LocalStorage
  ) { }

  public data = new URLSearchParams();
  public ajaxUrl = 'http://www.eheat.com.cn/wechatservice.ashx';

  public args(name) {//地址栏参数
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
  }

  public extractData(res: Response) {//回调
    let body = res.json();
    return body || {};
  }

  public handleError(error: Response | any) {//错误信息
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `出错了`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  private loadDiv = <HTMLElement>document.createElement('aside');

  public showLoading() {//加载中
    this.loadDiv.innerHTML = '<div id="loadingToast"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content">数据加载中</p></div></div>';
    document.body.appendChild(this.loadDiv);
  }

  public hideLoading() {//加载后
    document.body.removeChild(this.loadDiv)
  }

}
