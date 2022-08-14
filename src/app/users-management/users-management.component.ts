import { Component, OnInit } from '@angular/core';
import { auditTime } from 'rxjs';
import { User } from '../types/user.model';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  user : User[] = [];
  selectedUser : User | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
    this.user = [
      {
        name : 'Aditi',
        email : 'aditi.patel@gmail.com'
      },
      {
        name : 'Kaavya',
        email : 'Kaavya123@yahoo.com' 
      },
      {
        name : 'Nidhi',
        email : 'Nidhi_123_patel@gmail.com'
      }
    ]
  }
  
  close() {
    var ele = document.getElementById("dlgUserManageId") as HTMLDialogElement;
      if(ele !== undefined) {
          ele.close();
      }
  }

  confirmDelete(item: User) {
    
    var ele = document.getElementById("dlgUserManageId") as HTMLDialogElement
    if(ele !== undefined) {
      this.selectedUser = item;
      ele.showModal();
    }
  }

  deleteUser() {
       this.user.splice;  
  }

  edit(item: User) {
    this.selectedUser = item;
  }
}
