import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MetadataTableComponent } from './kaleidoscope/views/metadata-table/metadata-table.component';
import { KeywordsTableComponent } from './kaleidoscope/views/keywords-table/keywords-table.component';
import { ThumbnailsTableComponent } from './kaleidoscope/views/thumbnails-table/thumbnails-table.component';
import { AdvancedFilteringComponent } from './kaleidoscope/shared/advanced-filtering/advanced-filtering.component';
import { RowMenuComponent } from './kaleidoscope/shared/row-menu/row-menu.component';
import { TableMenuComponent } from './kaleidoscope/shared/table-menu/table-menu.component';
import { TableFooterComponent } from './kaleidoscope/table-footer/table-footer.component';
import { MapViewComponent } from './kaleidoscope/views/map-view/map-view.component';

import { TableViewService } from './kaleidoscope/services/table-view.service';
import { KaleidoscopeComponent } from './kaleidoscope/kaleidoscope.component';
import { DataControllerService } from './kaleidoscope/services/data-controller.service';
import { FilteringService } from './kaleidoscope/services/filtering.service';
import { SelectionMenuComponent } from './kaleidoscope/shared/selection-menu/selection-menu.component';
import { RowDensityService } from './kaleidoscope/services/row-density.service';
import { DocumentProviderService } from './app-services/document-provider.service';
import { KaleidoscopeModule } from './kaleidoscope/kaleidoscope.module';
import { ViewSelectorComponent } from './kaleidoscope/views/view-selector.component';
import { WorkflowTableComponent } from './kaleidoscope/views/workflow-table/workflow-table.component';



@NgModule({
  declarations: [
    AppComponent,
    KaleidoscopeComponent,
    MetadataTableComponent,
    KeywordsTableComponent,
    ThumbnailsTableComponent,
    AdvancedFilteringComponent,
    RowMenuComponent,
    TableMenuComponent,
    TableFooterComponent,
    MapViewComponent,
    SelectionMenuComponent,
    ViewSelectorComponent,
    WorkflowTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0erysD83QSAKH9CCVghJXph0py7BwmiY'
    }),
    KaleidoscopeModule
  ],
  providers: [
    DocumentProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
