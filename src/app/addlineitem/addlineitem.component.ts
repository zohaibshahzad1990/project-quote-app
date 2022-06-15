import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlineitem',
  templateUrl: './addlineitem.component.html',
  styleUrls: ['./addlineitem.component.css']
})
export class AddlineitemComponent implements OnInit {
  categories: any[];
  selectedCateory: any;
  marginLineItem: any;
  marginAmount: any;
  itemDescription: any;
  UOM: any;
  pricePerQuantity: any;
  quantity: any;
  waste: any;
  constructor() {
    this.categories = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {

  }

  handleSubmit(e: any) {

  }

}
