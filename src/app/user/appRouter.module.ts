import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


  const appRoutes: Routes = [

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)]
  })

  export class AppRouter{}