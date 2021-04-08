import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { App, Capacitor, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AlertsService } from '../services/alerts.service';
import { StorageService } from '../services/storage.service';
//import { FormGroup } from '@angular/forms';
const { Network } = Plugins;
const { Browser } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    password: string="";  
  //credentialForm: FormGroup;
  constructor(private alerts: AlertsService,
    private storage: StorageService , private cookieService: CookieService, private router: Router) { 
    
  }

  ngOnInit() {
    this.cookieService.set("currentTab","login");
  }

  ionViewWillEnter() {
    //this.unLock()
  }

  async unLock() {
    debugger;
    console.log(this.password)
    let Password = await this.storage.get('user_pass');
    let Biometric = await this.storage.get('biometric');

    if (Password) {
      if (Biometric) {
        this.alerts.fingerPrintAIO()
      } else {
        this.alerts.checkPass(this.password)
      }
    } 
    else this.alerts.setPass(this.password)
  }
async removeData() {
    await this.storage.remove('user_pass');
    await this.storage.remove('biometric');
    this.alerts.toastInfo("Data Removed!")
  }
  vdsPage(){
    this.router.navigateByUrl("/vds");
  }
  async openPage() {
    this.unLock();
    //this.router.navigateByUrl("/home")
    
    // console.log(this.credentialForm.value)
    // this.cookieService.set( 'username', this.credentialForm.value.email);
    // this.cookieService.set( 'password', this.credentialForm.value.password );
    // console.log(this.cookieService.getAll())
    // await Browser.open({ url: 'http://192.168.43.142:8100/home?username='+this.cookieService.get('username')+'&password='+this.cookieService.get('password'),toolbarColor:'#f4dc41' });
  }
}
