export default async function (eleventyConfig) {
    // Configure Eleventy
    eleventyConfig.addPassthroughCopy('src/assets/');
}

export const config = {
    dir: {
        input: 'src',
    },
};
