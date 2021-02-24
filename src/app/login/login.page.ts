import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.login();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  country() {

  }

  login() {
    this.form = this.formBuilder.group({
      number: [null, Validators.required],
    });
  }

  submit() {
    this.router.navigate(['/verify']);

    // this.router.navigate(['/select-grade']);

    // for (let v in this.form.controls) {
    //   this.form.controls[v].markAsTouched();
    // }
    // if (this.form.valid) {
    //   var body = {
    //     number: this.form.value.number,
    //   };
    // }
  }

}
