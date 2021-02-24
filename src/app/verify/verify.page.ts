import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  otpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router,
  ) { 
    this.verify();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  back() {
    this.navCtrl.pop();
  }

  resend() {
    console.log('Resend');
  }

  verify() {
    this.otpForm = this.formBuilder.group({
      input1: [null, Validators.required],
    });
  }

  submit() {
    this.router.navigate(['/select-grade']);

    // this.router.navigate(['/profile']);

    // for (let v in this.otpForm.controls) {
    //   this.otpForm.controls[v].markAsTouched();
    // }
    // if (this.otpForm.valid) {
    //   var body = {
    //     input1: this.otpForm.value.input1,
    //   };
    // }
  }

}
