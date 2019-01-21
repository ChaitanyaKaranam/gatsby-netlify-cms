const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    if(node.internal.type === 'MarkdownRemark'){
        const slug = createFilePath({
            node,
            getNode,
            basePath: `src/pages/blog`
        });

        const { createNodeField } = actions;

        createNodeField({
            node,
            name: `slug`,
            value: slug
        });

    }
}

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions;
    const BlogTemplate = path.resolve(`src/layouts/blogLayout.js`)
    return graphql(`
    {
        allMarkdownRemark{
          totalCount,
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
    `).then(res=> {
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: `blog${node.fields.slug}`,
                component: BlogTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}