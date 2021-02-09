/*

These are required in order to not throw errors when importing images
and SCSS styles.

Images are imported using `import foo from "./foo.jpg"`, which is then
picked up by the file-loader Webpack plugin.

But before it is picked up, Typescript does not know what a `.jpg` module
is. So we tell Typescript that it is just some random module.

*/

declare module "*.gif"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.scss"
