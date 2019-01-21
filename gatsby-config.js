module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/pages/blog`
            }
        },
        {
            resolve: `gatsby-transformer-remark`
        }
    ]
}