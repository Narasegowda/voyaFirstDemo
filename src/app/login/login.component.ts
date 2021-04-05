import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { App, Capacitor, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
//import { FormGroup } from '@angular/forms';
const { Network } = Plugins;
const { Browser } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //credentialForm: FormGroup;
  constructor(private cookieService: CookieService, private router: Router) { 
    
  }

  ngOnInit() {
    this.cookieService.set("currentTab","login");
  }

  vdsPage(){
    this.router.navigateByUrl("/vds");
  }
  async openPage() {
    this.router.navigateByUrl("/home")
    
    // console.log(this.credentialForm.value)
    // this.cookieService.set( 'username', this.credentialForm.value.email);
    // this.cookieService.set( 'password', this.credentialForm.value.password );
    // console.log(this.cookieService.getAll())
    // await Browser.open({ url: 'http://192.168.43.142:8100/home?username='+this.cookieService.get('username')+'&password='+this.cookieService.get('password'),toolbarColor:'#f4dc41' });
  }
}
