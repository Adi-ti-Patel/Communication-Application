import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-management',
  templateUrl: './docs-management.component.html',
  styleUrls: ['./docs-management.component.scss']
})
export class DocsManagementComponent implements OnInit {

  constructor() { }
   docs : any;
  ngOnInit(): void {
    this.docs = [
      {
        Label : 'Sales Report',
        FileName : 'sale.txt'
      },
      {
        Label : 'Summary',
        FileName : 'Summary.docs'
      }
    ]
  }
  upload() {
      var ele = document.getElementById("dlgUploadFileId") as HTMLDialogElement;
      if(ele !== undefined) {
          ele.showModal();
      }
  }

  close(dlgId: string) {
    var ele = document.getElementById(dlgId) as HTMLDialogElement;
      if(ele !== undefined) {
          ele.close();
      }
  }

  edit(item: any) {
    var ele = document.getElementById("dlgEditFileId") as HTMLDialogElement;
      if(ele !== undefined) {
          ele.showModal();
      }

  }

  delete() {
    var ele = document.getElementById("dlgDeleteConfirmId") as HTMLDialogElement
    if(ele !== undefined) {
      ele.showModal();
    }
  }

  share(item: any) {

  }
}
