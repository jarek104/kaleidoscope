import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { DocumentService } from './services/document.service';
import { HttpClientModule } from '@angular/common/http';
import { MetadataTableComponent } from './metadata-table/metadata-table.component';
import { KeywordsTableComponent } from './keywords-table/keywords-table.component';
import { ThumbnailsTableComponent } from './thumbnails-table/thumbnails-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MetadataTableComponent,
    KeywordsTableComponent,
    ThumbnailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
