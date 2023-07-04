import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BidiModule } from '@angular/cdk/bidi';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { TreeComponent } from './shared/tree/tree.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ BidiModule, BrowserModule, CommonModule, FormsModule, HttpClientModule ],
  declarations: 
  [ 
    AppComponent, 
    TreeComponent
  ],
  providers: [ConfigService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
