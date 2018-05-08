import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public picList=[];
  public picListWidth='';

  constructor(public navCtrl: NavController) {

    for(let i=1; i<9; i++){
        this.picList.push({
          picName: 'assets/imgs/0'+i+'.jpg',
          title: 'No.'+i+'pic'
        })
    }
    this.picListWidth=this.picList.length*95+'px';
  }

}
