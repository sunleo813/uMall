import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  public picList = [];
  public cateList = [];

  constructor(public navCtrl: NavController) {

    for (let i = 0; i < 8; i++) {
      this.picList.push({
        picName: 'assets/imgs/0' + i + '.jpg',
        title: 'No.' + i + 'pic'
      })
    }

    for (let i = 0; i < 8; i++) {
      this.cateList.push('Category ${i}');
    }

  }

}
