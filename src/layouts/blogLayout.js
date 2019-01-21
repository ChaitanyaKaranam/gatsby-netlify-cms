import React from 'react';
import { graphql } from 'gatsby';

const BlogLayout = ({ data }) => {
    console.log(data);
    return(
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
        </div>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            frontmatter{
                title
            },
            html
        }
    }
`

export default BlogLayout;