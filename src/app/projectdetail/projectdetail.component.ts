import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { LinetItemCategory, ProjectDetail } from '../model/project-detail';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  quoteData: LinetItemCategory[] = [];
  projectId: string | null = "";
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
    // this.quoteData = [
    //   {
    //     id: 6,
    //     name: "test",
    //     totalExGst: 0,
    //     total: 0,
    //     gstAmount: 0,
    //     marginAmount: 0,
    //     linetItem: [
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 16,
    //         categoryPosition: 4.03,
    //         itemDescription: "test",
    //         uom: "m2",
    //         pricePerQuantity: 200.1,
    //         quantity: 1,
    //         waste: 0.1,
    //         marginId: 0,
    //         cost: 200.1,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       }
    //     ]
    //   },
    //   {
    //     id: 7,
    //     name: "test",
    //     totalExGst: 0,
    //     total: 0,
    //     gstAmount: 0,
    //     marginAmount: 0,
    //     linetItem: [
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 16,
    //         categoryPosition: 4.03,
    //         itemDescription: "test",
    //         uom: "m2",
    //         pricePerQuantity: 200.1,
    //         quantity: 1,
    //         waste: 0.1,
    //         marginId: 0,
    //         cost: 200.1,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       }
    //     ]
    //   },
    //   {
    //     id: 8,
    //     name: "test",
    //     totalExGst: 0,
    //     total: 0,
    //     gstAmount: 0,
    //     marginAmount: 0,
    //     linetItem: [
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 16,
    //         categoryPosition: 4.03,
    //         itemDescription: "test",
    //         uom: "m2",
    //         pricePerQuantity: 200.1,
    //         quantity: 1,
    //         waste: 0.1,
    //         marginId: 0,
    //         cost: 200.1,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       }
    //     ]
    //   },
    //   {
    //     id: 9,
    //     name: "test",
    //     totalExGst: 0,
    //     total: 0,
    //     gstAmount: 0,
    //     marginAmount: 0,
    //     linetItem: [
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       },
    //       {
    //         categoryPositionId: 16,
    //         categoryPosition: 4.03,
    //         itemDescription: "test",
    //         uom: "m2",
    //         pricePerQuantity: 200.1,
    //         quantity: 1,
    //         waste: 0.1,
    //         marginId: 0,
    //         cost: 200.1,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       }
    //     ]
    //   },
    //   {
    //     id: 10,
    //     name: "test",
    //     totalExGst: 0,
    //     total: 0,
    //     gstAmount: 0,
    //     marginAmount: 0,
    //     linetItem: [
    //       {
    //         categoryPositionId: 0,
    //         categoryPosition: 0,
    //         itemDescription: "null",
    //         uom: "null",
    //         pricePerQuantity: 0,
    //         quantity: 0,
    //         waste: 0,
    //         marginId: 0,
    //         cost: 0,
    //         totalExGst: 0,
    //         total: 0,
    //         marginAmount: 0,
    //         gstAmount: 0
    //       }
    //     ]
    //   }
    // ]

  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id')
    if (this.projectId) {
      this.apiService.getProjectLineItems(this.projectId).subscribe({
        next: (data: ProjectDetail) => {

          this.quoteData = data.linetItemCategory
        }, // success path
        // error: error => this.error = error, // error path
      });
    }
    // this.route.params.subscribe(async (params) => {
    //   this.projectId = params['id'];
    // });
    console.log(this.projectId)
  }

  addClick() {
    this.router.navigate([`project/detail/${this.projectId}/addlineitem`])
  }
  marginClick() {

  }

}
