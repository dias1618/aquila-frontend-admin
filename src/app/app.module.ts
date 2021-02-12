import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './view/shared/navbar/navbar.module';
import { FooterModule } from './view/shared/footer/footer.module';
import { SidebarModule } from './view/sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './view/layouts/admin-layout/admin-layout.component';
import { AngularMaterialModule } from './view/shared/angular-material.module';
import { SharedModule } from './view/shared/shared.module';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    AngularMaterialModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
