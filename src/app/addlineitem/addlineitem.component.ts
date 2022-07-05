import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-addlineitem',
  templateUrl: './addlineitem.component.html',
  styleUrls: ['./addlineitem.component.css']
})
export class AddlineitemComponent implements OnInit {
  categories: Category[] = [];
  selectedCateory: any;
  marginLineItem: any;
  marginAmount: any;
  itemDescription: any;
  UOM: any;
  pricePerQuantity: any;
  quantity: any;
  waste: any;

  projectId: number = 0;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    // this.categories = [
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' }
    // ];
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.projectId = params['id'];
      this.apiService.getCatogory(this.projectId).subscribe({
        next: (data: Category[]) => {

          this.categories = data
        }, // success path
        // error: error => this.error = error, // error path
      });
    })

  }

  handleSubmit(e: any) {

  }

}
