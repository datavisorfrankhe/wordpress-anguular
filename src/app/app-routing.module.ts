import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: ':slug',
        component: DetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
