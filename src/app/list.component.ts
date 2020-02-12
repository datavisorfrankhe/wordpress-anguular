import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    nodes = [];
    constructor(apollo: Apollo) {
        apollo
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
                    this.nodes.push(edge.node);
                });
                console.log(this.nodes);
            });
    }
}
