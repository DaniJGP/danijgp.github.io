import { HtmlBasePlugin } from '@11ty/eleventy';

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addFilter('localize', function (key) {
        const lang = this.ctx.lang || 'en';
        const translations = this.ctx[lang] || {};
        return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
    });
}

export const config = {
    dir: {
        input: 'src',
    },
};
