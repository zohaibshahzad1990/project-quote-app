import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  quoteData: any[]
  constructor() {
    this.quoteData = [
      {
        id: 6,
        name: "test",
        totalExGst: 0,
        total: 0,
        gstAmount: 0,
        marginAmount: 0,
        linetItem: [
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 16,
            categoryPosition: 4.03,
            itemDescription: "test",
            uom: "m2",
            pricePerQuantity: 200.1,
            quantity: 1,
            waste: 0.1,
            marginId: 0,
            cost: 200.1,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          }
        ]
      },
      {
        id: 7,
        name: "test",
        totalExGst: 0,
        total: 0,
        gstAmount: 0,
        marginAmount: 0,
        linetItem: [
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 16,
            categoryPosition: 4.03,
            itemDescription: "test",
            uom: "m2",
            pricePerQuantity: 200.1,
            quantity: 1,
            waste: 0.1,
            marginId: 0,
            cost: 200.1,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          }
        ]
      },
      {
        id: 8,
        name: "test",
        totalExGst: 0,
        total: 0,
        gstAmount: 0,
        marginAmount: 0,
        linetItem: [
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 16,
            categoryPosition: 4.03,
            itemDescription: "test",
            uom: "m2",
            pricePerQuantity: 200.1,
            quantity: 1,
            waste: 0.1,
            marginId: 0,
            cost: 200.1,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          }
        ]
      },
      {
        id: 9,
        name: "test",
        totalExGst: 0,
        total: 0,
        gstAmount: 0,
        marginAmount: 0,
        linetItem: [
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          },
          {
            categoryPositionId: 16,
            categoryPosition: 4.03,
            itemDescription: "test",
            uom: "m2",
            pricePerQuantity: 200.1,
            quantity: 1,
            waste: 0.1,
            marginId: 0,
            cost: 200.1,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          }
        ]
      },
      {
        id: 10,
        name: "test",
        totalExGst: 0,
        total: 0,
        gstAmount: 0,
        marginAmount: 0,
        linetItem: [
          {
            categoryPositionId: 0,
            categoryPosition: 0,
            itemDescription: null,
            uom: null,
            pricePerQuantity: 0,
            quantity: 0,
            waste: 0,
            marginId: 0,
            cost: 0,
            totalExGst: 0,
            total: 0,
            marginAmount: 0,
            gstAmount: 0
          }
        ]
      }
    ]

  }

  ngOnInit(): void {
    console.log(this.quoteData)
  }

}
