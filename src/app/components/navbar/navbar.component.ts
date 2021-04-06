import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { CookieService } from 'ngx-cookie-service';
const { Network } = Plugins;
const { Browser } = Plugins;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

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

  ngOnInit() {}
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
