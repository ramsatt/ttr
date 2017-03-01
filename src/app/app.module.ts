import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/common/login/login.component';

//routing
import { routing } from './app.routes';
import { MenuLeftComponent } from './component/menu-left/menu-left.component';
import { MenuTopComponent } from './component/menu-top/menu-top.component';
import { MenuRightComponent } from './component/menu-right/menu-right.component';
import { MenuFooterComponent } from './component/menu-footer/menu-footer.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLeftComponent,
    MenuTopComponent,
    MenuRightComponent,
    MenuFooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
