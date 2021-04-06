import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { App, Capacitor, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
//import { FormGroup } from '@angular/forms';
const { Network } = Plugins;
const { Browser } = Plugins;

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {

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
    this.cookieService.set("currentTab","balance");
  }
  newBrowser(){
    window.open('https://voya.com', '_system', 'location=yes')
    let currentTab = this.cookieService.get("currentTab")
    this.router.navigateByUrl(currentTab)
  }
  withinApp(){
    Browser.open({
      url: "https://www.voya.com",
      windowName: "_system"
    })
    let currentTab = this.cookieService.get("currentTab")
    this.router.navigateByUrl(currentTab)
  }
  tabedHome(){
    this.router.navigateByUrl("/home")
  }
  tabedBalance(){
    this.router.navigateByUrl("balance")
  }

}
