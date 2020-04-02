

import { Component, OnInit } from '@angular/core';
import { MemberService } from "../../member/member.service";
import { ActivatedRoute, Router } from "@angular/router";

import { DonorService } from "../donor.service";
import {NgForm} from '@angular/forms';
import { Donor } from "../donor.models";
import {Member} from 'src/app/member/member.model';


@Component({
  selector: 'app-create-donor',
  templateUrl: './create-donor.component.html',
  styleUrls: ['./create-donor.component.scss']
})
export class CreateDonorComponent implements OnInit {

  donor: Donor = new Donor();
  submitted = false;
  member:Member
  

  constructor(private donorService: DonorService,private memberService:MemberService, private router: Router) {}

  ngOnInit() {
  this.reloadData();
  }


  onSubmit(ngForm: NgForm): void {
    this.submitted = true;
    this.save(ngForm);
  }
  newDonor(): void {
    this.submitted = false;
    this.donor = new Donor();
  }

  save(form) {
    this.donorService.createDonor(form.value).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.donor = new Donor();
    this.gotoList();
  }

 
  gotoList() {
    this.router.navigate(["/members"]);
  }
  reloadData() {
    this.memberService.getMemberList().subscribe(data=> this.member=data);
  }
}


