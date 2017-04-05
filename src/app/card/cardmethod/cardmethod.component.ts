import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CardService } from '../card.service';
import { LocalStorage } from '../../local.storage';

@Component({
  selector: 'app-cardmethod',
  templateUrl: './cardmethod.component.html',
  styleUrls: ['./cardmethod.component.css']
})
export class CardmethodComponent implements OnInit {

  public bdList: Array<any>;
  public openid = this.ls.get('openid');

  constructor(
    private router: Router,
    private cardService: CardService,
    private ls: LocalStorage
  ) { }

  ngOnInit() {
    this.getCompany()
  }

  getCompany() {
    return this.cardService.getCompany(this.openid).subscribe(
      res => {
        this.getCardMethod(res.id);
        this.ls.set('companyid', res.id);
        this.ls.set('companyname', res.name);
      },
      error => {
        console.log(error);
      },
      () => { }
    )
  }

  getCardMethod(custid: string) {
    return this.cardService.getCardMethod(this.openid, custid).subscribe(
      res => {
        if (res == '') {
          this.bdList = homeBind;
        } else if (res.length == 1 && res[0].c_mode == '供热卡号') { //只有供热卡号一种方式绑卡
          // localStorage.cardnumInfo = JSON.stringify(res[0]);
          // $location.path('/addcard')
        } else {
          this.bdList = res
        }
      },
      error => {
        console.log(error);
      },
      () => { }
    )
  }

  bindCard(task: any) {
    if (task.c_mode == "供热卡号") {
      this.ls.setObject("bkinfo", task);
      this.router.navigateByUrl('card/cardbynum')
    } else if (task.c_mode == "身份证号") {

    } else if (task.c_mode == "小区楼号") {

    } else if (task.c_mode == "地址或房屋号") {

    }
  }
}

let homeBind = [{
  "c_mode": "供热卡号",
  "isinputname": 0
},
{
  "c_mode": "身份证号"
},
{
  "c_mode": "小区楼号"
},
{
  "c_mode": "地址或房屋号"
}
];
