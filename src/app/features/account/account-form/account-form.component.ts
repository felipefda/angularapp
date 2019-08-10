import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ,private accountService: AccountService
    ,private formBuilder: FormBuilder
  ) { }

  form : FormGroup;
  

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['' , Validators.required]
      ,username: ['' , Validators.required]
      ,email: ['' , Validators.required]
      ,address: this.formBuilder.group({
        street: ['']
        ,suite: ['']
        ,city: ['']
        ,zipcode: ['']
        ,geo: this.formBuilder.group({
          lat: ['']
          ,lng : ['']
        })
      })
      ,phone: ['']
      ,website: ['']
      ,company: this.formBuilder.group({
        name: ['']
        ,catchPhrase: ['']
        ,bs: ['']
      })
    });
    this.get();
  }

  get(){
    const id = parseInt(this.route.snapshot.paramMap.get("id"))
    this.accountService.get(id).subscribe(data=>{
      console.log(data);
      this.form.patchValue(data);
    });
  }

}
