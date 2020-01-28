import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { Q1Component } from './q1/q1.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {APIPokemonService} from "./poke-api.service";
import { ComponentAffichageComponent } from './component-affichage/component-affichage.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    Q1Component,
    FilterPokemonPipePipe,
    ComponentAffichageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [APIPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
