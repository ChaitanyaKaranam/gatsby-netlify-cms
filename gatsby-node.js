const { createFilePath } = require('gatsby-source-filesystem');

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