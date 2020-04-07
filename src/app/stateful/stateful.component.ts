import { Component, OnInit, ViewChild } from '@angular/core';

import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { isNgTemplate } from '@angular/compiler';
import {ConfirmComponent} from '../confirm/confirm.component'


@Component({
selector: 'app-stateful',
templateUrl: './stateful.component.html',
styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {
 

shopModel: Shop = new Shop();
boughtItems: Array<Product>;
@ViewChild(ConfirmComponent, {static: false})
confirmChild: ConfirmComponent;

constructor() { this.boughtItems = [];
}
 
ngOnInit(): void {
}
 
clickItem(curso) {
 this.boughtItems.push(curso);
}
cursoMatriculado(_event: Product) {
  this.clickItem(_event);
  this.confirmChild.isDisabled = false;
  
 }
 

 finalPrice() {
  if (this.boughtItems) {
    return this.boughtItems.reduce(
      (prev: number, item: Product) => prev + item.price, 0
    );
  }
 }
 
}

