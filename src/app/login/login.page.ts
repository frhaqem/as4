import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { loadingController } from '@ionic/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    public router: Router,
    public modalCtrl: ModalController,
    public loadCtrl : LoadingController,
  ) { }

  ngOnInit() {
  }
  async dismiss(){
  await this.modalCtrl.dismiss();
  }
  OnLogin(){
   this.router.navigate(['home']);
    // this.loginService.logIn();

    // this.loadCtrl.create({
    //   keyboardClose: true,
    //   message: 'Logging in...'
    // }).then(loadingEl => {
    //   loadingEl.present();
      
    // //faking a lagging response
    // setTimeout(() => {
    //   loadingEl.dismiss();
    //   this.router.navigateByUrl('home');
    // }, 1500); 
    // });
  }

}
