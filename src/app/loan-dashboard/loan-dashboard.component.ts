// import { _Bottom } from "@angular/cdk/scrolling";
// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-loan-dashboard',
//   templateUrl: './loan-dashboard.component.html',
//   styleUrls: ['./loan-dashboard.component.css']
// })
// export class  LoanDashboardComponent  {
//   columnDefs = [{ Headername: "loanID" ,field: "loanID" },
//    { Headername: "PurposeOfLoan" , field: "PurposeOfLoan" }, 
//    { Headername:"status" ,  field: "status" },  { Headername: "option" ,field: "option",
//    cellRenderer : function(params){
//     return '<div><button (click)="onEdit()">Edit</button></div>'
// }
//     }
//   ];

//   rowData = [
//     { loanID: 111001, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
//     { loanID: 111002, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
//     { loanID: 111003, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111004, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111005, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111006, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111007, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111008, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111009, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111010, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111011, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111012, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
//     { loanID: 111013, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111014, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111015, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111016, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111017, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111018, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111019, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
//     { loanID: 111020, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
//     { loanID: 111021, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    

//   ];
// }

import { Component } from '@angular/core';
import { ButtonRendererComponent } from './button-renderer.component';

@Component({
  selector: 'app-loan-dashboard',
  templateUrl: './loan-dashboard.component.html',
  styleUrls: [ './loan-dashboard.component.css' ]
})
export class LoanDashboardComponent  {

  frameworkComponents: any;
  api: any;
  constructor()
  {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  columnDefs = [
   { Headername: "loanID" ,field: "loanID", editable: false },
   { Headername: "PurposeOfLoan" , field: "PurposeOfLoan" ,editable: true }, 
   { Headername:"status" ,  field: "status", editable: false },

  {
    headerName: 'Edit',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
    onClick: this.onEditButtonClick.bind(this),
    label: 'Edit'
    },
  },
  {
    headerName: 'Save',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
    onClick: this.onSaveButtonClick.bind(this),
    label: 'Save'
    },
  },
  // {
  //   headerName: 'Delete',
  //   cellRenderer: 'buttonRenderer',
  //   cellRendererParams: {
  //   onClick: this.onDeleteButtonClick.bind(this),
  //   label: 'Delete'
  //   },
  // },
];

onRowEditingStopped(params)
{
  debugger;
}

onEditButtonClick(params)
{
 this.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: 'loanID'
  });
}

onSaveButtonClick(params)
{
 this.api.stopEditing();
}

onDeleteButtonClick(params)
{
  debugger;
 this.api.updateRowData({remove: [params.data]});
}

onGridReady(params)
{
  this.api = params.api;
}


rowData = [
      { loanID: 111001, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
      { loanID: 111002, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
      { loanID: 111003, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111004, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111005, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111006, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111007, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111008, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111009, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111010, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111011, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111012, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111013, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111014, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111015, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111016, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111017, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111018, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111019, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
      { loanID: 111020, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      { loanID: 111021, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
      
  
    ];

    UserName= 'raghul';

}
