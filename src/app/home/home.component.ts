import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { App, Capacitor, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
//import { FormGroup } from '@angular/forms';
const { Network } = Plugins;
const { Browser } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) {
    Browser.addListener(`browserPageLoaded`,()=>{
      console.log('browser event called')
    });
    Browser.addListener(`browserFinished`,()=>{
      console.log('browser event finished')
    });
    Browser.prefetch({
      urls:['https://www.voya.com']
    })
   }

  ngOnInit() {
    this.cookieService.set("currentTab","home");
  }
  newBrowser(){
    window.open('https://voya.com', '_system', 'location=yes')
    let currentTab = this.cookieService.get("currentTab")
    this.router.navigateByUrl(currentTab)
  }
  withinApp(){
    Browser.open({
      url: "https://www.voya.com",
      windowName: "_system",
      toolbarColor: "#D75426"
    })
    let currentTab = this.cookieService.get("currentTab")
    this.router.navigateByUrl(currentTab)
  }
  tabedBalance(){
    this.router.navigateByUrl("/balance")
  }
}
