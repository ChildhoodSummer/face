import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from '../../local.storage';
import { AppService } from '../../app.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cardbynum',
  templateUrl: './cardbynum.component.html',
  styleUrls: ['./cardbynum.component.css']
})
export class CardbynumComponent implements OnInit {

  private cardnum: any = '';
  private alias: string = '';
  private openid = this.ls.get('openid');
  private companyname = this.ls.get('companyname');
  private companyid = this.ls.get('companyid');

  constructor(
    private ls: LocalStorage,
    private ele: ElementRef,
    private apps: AppService,
    private cardservice: CardService,
    private router: Router
  ) { }


  ngOnInit() { }

  add() {//绑卡
    if (this.cardnum == '') {
      alert('请输入卡号');
      return;
    } else {
      this.apps.showLoading();
      return this.cardservice.addCardBynum(this.openid, this.cardnum, this.companyid, this.companyname, this.alias).subscribe(
        res => {
          this.apps.hideLoading();
          if (res.RoomID) {
            alert("添加成功");
            this.router.navigateByUrl('card/cardlist?openid='+this.openid)
          } else {
            alert(res.errmsg)
          }
        },
        error => {
          console.log(error);
        },
        () => { }
      )
    }
  }

}
