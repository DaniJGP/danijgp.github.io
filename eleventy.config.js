import { HtmlBasePlugin } from '@11ty/eleventy';
import { EleventyI18nPlugin as I18nPlugin } from '@11ty/eleventy';

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(I18nPlugin, {
        defaultLanguage: 'en'});
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
