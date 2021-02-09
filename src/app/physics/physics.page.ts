import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.page.html',
  styleUrls: ['./physics.page.scss'],
})
export class PhysicsPage implements OnInit {

  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

  physics: any = "videos";
  ActiveTabes: any = "videos";
  currentTabs: any = "videos";

  visabilityEmail :boolean = false;
  isCheckedEmail : boolean = false;

  // itemExpanded: boolean = false
  // itemExpandHeight: number = 200;

  // public items: any = [];

  constructor(
    private navCtrl: NavController,
    private statusBar: StatusBar,
    ) { 
      // this.items = [
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false },
      //   { expanded: false }
      // ];
      for(let i = 0; i < 10; i++ ){
        this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'chevron-forward',
          showDetails: false
        });
      }
    }

  ngOnInit() {
  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'chevron-forward';
    } else {
      data.showDetails = true;
      data.icon = 'chevron-down';
    }
  }

  onChangeEmail(){
    if(this.isCheckedEmail  = !this.isCheckedEmail){
      this.visabilityEmail = true;
    }
    else if(this.isCheckedEmail  == this.isCheckedEmail){
      this.visabilityEmail = false;
    }
  }

  ionViewWillEnter() {    
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#212B46');
  }

  back() {
    this.navCtrl.pop();
  }

  // expandItem(item): void {
  //   if (item.expanded) {
  //     item.expanded = false;
  //   } else {
  //     this.items.map(listItem => {
  //       if (item == listItem) {
  //         listItem.expanded = !listItem.expanded;
  //       } else {
  //         listItem.expanded = false;
  //       }
  //       return listItem;
  //     });
  //   }
  // }
}
