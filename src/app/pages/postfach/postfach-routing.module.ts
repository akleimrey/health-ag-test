import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostfachComponent } from './postfach.component';
import { PostfachEingangComponent } from './postfach-eingang/postfach-eingang.component';
import { PostfachArchivComponent } from './postfach-archiv/postfach-archiv.component';
import { PostfachDetailComponent } from './postfach-detail/postfach-detail.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { PostfachNachrichtComponent } from './postfach-nachricht/postfach-nachricht.component';

const routes: Routes = [
  {
    path: '', component: PostfachComponent, children: [
      { path: 'eingang', component: PostfachEingangComponent },
      { path: 'archiv', component: PostfachArchivComponent },
      { path: 'gesendet', component: PostfachArchivComponent },
      { path: 'nachricht/:id', component: PostfachNachrichtComponent },
      {
        path: 'nachricht-neu', children: [
          { path: '', component: PostfachDetailComponent },
          { path: 'attachment', component: AttachmentComponent },
        ]
      },
      { path: '', redirectTo: 'eingang', pathMatch: 'full' },
      { path: '**', component: PostfachEingangComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostfachRoutingModule { }
