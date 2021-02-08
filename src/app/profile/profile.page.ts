import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup;

  constructor(
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    private datePicker: DatePicker,
  ) { 
    this.profile();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  back() {
    this.navCtrl.pop();
  }

  openCalendar(){
    // this.calendar.openCalendar(new Date()).then(
    //     (msg) => { console.log(msg); },
    //     (err) => { console.log(err); }
    // );
//     this.datePicker.show({
//   date: new Date(),
//   mode: 'date',
//   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
// }).then(
//   date => console.log('Got date: ', date),
//   err => console.log('Error occurred while getting date: ', err)
// );
  }

  profile() {
    this.profileForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      date: [null, Validators.required],
      city: [null, Validators.required],
      board: [null, Validators.required],
      class: [null, Validators.required],
    });
  }

  submit() {
    // this.router.navigate(['/verified']);
    for (let v in this.profileForm.controls) {
      this.profileForm.controls[v].markAsTouched();
    }
    if (this.profileForm.valid) {
      var body = {
        name: this.profileForm.value.name,
        email: this.profileForm.value.email,
        date: this.profileForm.value.date,
        city: this.profileForm.value.city,
        board: this.profileForm.value.board,
        class: this.profileForm.value.class,
      };
    }
  }

}
