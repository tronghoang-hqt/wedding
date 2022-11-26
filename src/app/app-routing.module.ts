import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  { path: '', redirectTo: 'wedding' ,pathMatch: "full"},
  { path: 'wedding', component: WeddingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
