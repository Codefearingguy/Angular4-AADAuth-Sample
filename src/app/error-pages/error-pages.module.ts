import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPagesRoutes } from './error-pages.routing';

@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutes
  ],
  declarations: [NotFoundComponent]
})
export class ErrorPagesModule { }
