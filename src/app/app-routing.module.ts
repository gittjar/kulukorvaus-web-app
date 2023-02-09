import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LomakepohjaComponent } from './lomakepohja/lomakepohja.component';
import { MatkalaskuComponent } from './matkalasku/matkalasku.component';
import { MatkalaskuMultipleComponent } from './matkalasku-multiple/matkalasku-multiple.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [

  {path: 'kulukorvauslomake', component: LomakepohjaComponent},
  {path: 'information', component: InformationComponent},
  {path: 'matkalasku_1', component: MatkalaskuComponent},
  {path: 'matkalasku_2', component: MatkalaskuMultipleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
