import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {AboutPageComponent} from './about-page/about-page.component'
import {AboutExtraPageComponent} from './about-page/about-extra-page/about-extra-page.component'

const routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
