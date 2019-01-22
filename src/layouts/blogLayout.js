import React from 'react';
import { graphql } from 'gatsby';

const BlogLayout = ({ data }) => {
    console.log(data);
    return(
        <React.Fragment>
            <h1>This is my Blog</h1>
            <hr/>

            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
            </div>
        </React.Fragment>
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