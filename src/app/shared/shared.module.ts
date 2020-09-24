import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { EmbedVideo } from 'ngx-embed-video';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    OwlModule,
    EmbedVideo.forRoot(),
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    ToastrModule,
    FormsModule,
    OwlModule,
    NgxSpinnerModule,
    EmbedVideo,
    NgxPaginationModule
  ],
  providers: [
    HttpClientModule,
  ],
})
export class SharedModule { }
