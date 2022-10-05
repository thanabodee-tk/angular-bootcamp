import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';

import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    PortalModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    RouterModule.forRoot([], { useHash: true }),
  ],
  declarations: [AppComponent, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
