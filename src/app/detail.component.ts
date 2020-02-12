import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    slug = '';
    content = '';
    constructor(private activeRoute: ActivatedRoute, private apollo: Apollo) {
        this.activeRoute.params.subscribe(params => {
            this.slug = params.slug;
            this.getContent();
        });
    }

    getContent() {
        this.apollo
            .query({
                query: gql`
            {
                posts{
                   edges {
                     node {
                         title
                         excerpt
                         slug
                         author {
                           name
                         }
                         date
                         content
                     }
                   }
                 }
           }
            `,
            })
            .subscribe((data: any) => {
                data.data.posts.edges.forEach(edge => {
                    if (edge.node.slug === this.slug) {
                        this.content = edge.node.content;
                    }
                });
            });
    }
}
