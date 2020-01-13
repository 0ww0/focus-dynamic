# Ping-U Front End Website

Front End Web Development using Vuejs

### Language And Framework Use

| Type          | Framework     | Version       |
| ------------- | ------------- | ------------- |
| Task Runner   | Gulp          | 4.0.2
| Module Bundler| Webpack       | 4.39.2
| HTML Templating Engine | Pug      | Differ
| CSS Preprocessor | SCSS | Differ
| Javascript Framework | Vuejs & Jquery |
| Icon Framework | Frontawesome Free |
| Custom Icon | Icomoon(Custom Design) |

* Differ - Each gulp and webpack use different version
* **Bootstap and other CSS Framework not permitted to use**

### Getting Started

Make sure you have NodeJS installed (currently built using v4^).

1. Clone the repo.
2. `cd` into the folder and do a fresh `npm i`.
3. Run `gulp` to start the server

Server Configuration is point at `localhost:8080`!

The port `:8080` will auto changes if detected other Gulp / NodeJS instances.

When serve. Gulp will delete the folder/file first and create a new one.

### Mockup Link
Standard
- https://xd.adobe.com/spec/18065293-a2f9-4b46-4e3e-c9d63ed677c1-6e37/

Premium
- https://xd.adobe.com/view/df5acc38-700e-4d38-7ebe-a6e54bc8822f-a96b/grid

## Note

### Gulp
 - Delete all the file in build folder first before proceed to compile all the file back to newer version.
 - Each build serve new file folder.
 - Compile all .pug file into .html file.
 - Compile all .scss file into .css file.
 - Stream Webpack file config to compile vuejs.

### Webpack
 - Each page is separate into its own js file.
 - Each page has its own vuejs file and entrypoint js.
 - Each page will be separate into local and global components
 - Local components as the name suggested is accessible only on it own entrypoint.
 - Will global components can be accessible by all pages.
 - Compile .pug inside .vuejs file.
 - Compile .scss inside .vuejs file.

### Github
- All Task, Branch, Comment need to be legible.
- Every task need to open a new issue.
- Create a new branch based on the issue.
- Each branch need to be approve before merging.

## Folder Structure
```
src
+
|___+ assets
    |___+ fonts
        |___ + fontawesome
        |___ + icon
        |___ + roboto
    +
    |___+ frontend
        |___ + _app
        |___ + _components
        |___ + _layout
        |___ + _pages
        |___ + _shares
    +
    |___+ images
        |___ + banner
        |___ + brand
        |___ + favicon
        |___ + marker
        |___ + ui
    +
    |___+ styles
        |___ + components
        |___ + externals
        |___ + includes
        |___ + promotions
        |___ + rewards
        |___ _config.scss
        |___ components.scss
        |___ fontawesome.scss
        |___ global.scss
+
|___ + templates
    |___+ app
        |___ + auth
            |___ sign-in.pug
            |___ sign-up.pug
        +
        |___ + collect
            |___ booking.pug
            |___ index.pug
        +
        |___ + send
            |___ + point-to-door
                |___ bulk-parcel.pug
                |___ individual-parcel.pug
            |___ door-to-door.pug
            |___ point-to-point.pug
        |___ dashboard.pug
    +
    |___+ include
        |___ + _modules
            |___ _favicon.pug
            |___ _javascript.pug
            |___ _layout.pug
            |___ _meta.pug
            |___ _stylesheet.pug
        |___ _config.pug
        |___ _default.pug
    +
    |___+ send
        |___ door-to-door.pug
        |___ index.pug
        |___ point-to-door.pug
        |___ point-to-point.pug
    |___ about-us.pug
    |___ contact-us.pug
    |___ faq.pug
    |___ index.pug
    |___ location.pug
    |___ partner-merchant.pug
    |___ privacy-policy.pug
    |___ promotion.pug
    |___ shop-collect.pug
    |___ term.pug

```
