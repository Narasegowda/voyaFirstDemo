import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.pageRoute('balance');
  }
  pageRoute(str){
    document.getElementById('home').style.borderTop ="none";
    document.getElementById('home').style.borderRadius ="none";

    document.getElementById('balance').style.borderTop ="none";
    document.getElementById('balance').style.borderRadius ="none";

    document.getElementById('contributions').style.borderTop ="none";
    document.getElementById('contributions').style.borderRadius ="none";

    document.getElementById('investments').style.borderTop ="none";
    document.getElementById('investments').style.borderRadius ="none";

    document.getElementById(str).style.borderTop ="5px solid #d95525";
    document.getElementById(str).style.borderRadius ="7px 8px 3px 37px";

    if(str === 'home'){
      this.router.navigateByUrl('/home');
    }else if(str === 'balance'){
      this.router.navigateByUrl('/balance');
    }else if(str === 'contributions'){
      this.router.navigateByUrl('/balance');
    }else if(str === 'investments'){
      this.router.navigateByUrl('/balance');
    }
  }
}
