import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AppService } from '../../app.service';
import { CardService } from '../card.service';
import { LocalStorage } from '../../local.storage';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {


  //public openid = 'oVxc7t9BGX_892JWfsXQsvfRGec0';
  public openid = this.apps.args('openid');
  public localid = this.ls.set('openid',this.openid);
  public cardList: Array<any>

  constructor(
    public router: Router,
    public cardService: CardService,
    public apps: AppService,
    public ls: LocalStorage
  ) { }


  ngOnInit() {
    this.loadData();
  }

  loadData() {
    return this.cardService.getCardInfo(this.openid).subscribe(
      res => {
        this.cardList = res.WarmUserInfo;
      },
      error => {
        console.log(error);
      },
      () => { }
    )
  }

  delCard(Card: any, i) {//解绑
    if (confirm('您确定要解绑此卡吗？')) {
      return this.cardService.deleteCard(this.openid, Card.RoomID).subscribe(
        res => {
          this.cardList.splice((Card.RoomID, i), 1);
          alert('您已成功解绑！')
        },
        error => {
          console.log(error)
        },
        () => { }
      )
    }
  }

  addCard() {//添加用户信息
    this.router.navigateByUrl('card/cardmethod')
  }


}
