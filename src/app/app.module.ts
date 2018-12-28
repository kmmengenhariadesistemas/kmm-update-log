import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { HttpClientModule } from "@angular/common/http";
import { PatchDetailComponent } from './patch-detail/patch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateListComponent,
    PatchDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
