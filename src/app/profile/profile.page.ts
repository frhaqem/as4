import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }
  async editprofile(){
    this.router.navigateByUrl('profile/edit-profile');
  }
}
