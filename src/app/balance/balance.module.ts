import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { BalancePageRoutingModule } from './balance-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BalanceComponent } from './balance.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancePageRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [BalanceComponent,FooterComponent,NavbarComponent],
  exports: [],
  schemas: []
})
export class BalancePageModule {}
