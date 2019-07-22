import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from "@angular/forms";
import { PAGES_ROUTES } from './pages.routes';
//ng2 -charts
import { ChartsModule } from 'ng2-charts';


//temporal

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
 declarations:[
    PagesComponent, 
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
 ],
 exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component, 
    //ChartsModule
  
 ],
 imports:[
     SharedModule,
     PAGES_ROUTES,
     FormsModule,
     ChartsModule
 ]   
})
export class PagesModule {

}