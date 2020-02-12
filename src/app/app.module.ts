import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
    declarations: [AppComponent, ListComponent, DetailComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            // link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
            // link: httpLink.create({ uri: 'http://localhost/graphql' }),
            link: httpLink.create({ uri: 'https://www.datavisor.com/graphql' }),
            cache: new InMemoryCache()
        });
    }
}
