
// .eleventy.js
module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site" // This is the default, but good to be explicit
    }
  };
};