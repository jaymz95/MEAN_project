import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { TargetsComponent } from './targets/targets.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes} from '@angular/router';

import { MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';

  const appRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'targets',
    component: TargetsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TargetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
