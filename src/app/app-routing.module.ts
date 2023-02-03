import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LomakepohjaComponent } from './lomakepohja/lomakepohja.component';
import { MatkalaskuComponent } from './matkalasku/matkalasku.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [

  {path: 'kulukorvauslomake', component: LomakepohjaComponent},
  {path: 'information', component: InformationComponent},
  {path: 'matkalasku_1', component: MatkalaskuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
