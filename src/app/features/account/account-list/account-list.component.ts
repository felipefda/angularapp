import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email','edit'];
  list = [];

  constructor(private accountService : AccountService) { }

  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this.accountService.list().subscribe(data=>{
      this.list = data;
    });
  }


}
