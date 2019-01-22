import React from "react";
import { graphql, Link } from 'gatsby';

export default ({ data }) => {
    console.log(data);
    return(
        <div>
            {data.allMarkdownRemark.edges.map(({node}) => {
                return <Link key={node.fields.slug} to={`blog${node.fields.slug}`} style={{ display: `block`}}>{node.frontmatter.title}</Link>
            })}
        </div>
    )
}

export const query = graphql`
{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
          },
          fields{
            slug
          }
        }
      }
    }
  }
`;
