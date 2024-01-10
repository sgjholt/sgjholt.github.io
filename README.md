# sgjholt.github.io
A personal 'portfolio' website created using the Jekyll framework, hosted as a GitHub Page.

## Adding elements to the default template header or footer
To add elements to the header or footer of the default theme, add them to the `_includes/head-custom.html`, or `_includes/footer-custom.html` files. If the component requires a lot of code, it is bette to separate it out into it's own file first, then include it in the `<head or footer>-custom.html` files, e.g., see `{% include navbar.html %}` in `_includes/head-custom.html`.

## Supported Plugin Elements
Currently, the following elements are supported:
    - Navbar
    - Copywright Statement

## Developing

### If you have gem installed but not jekyll

_Note: Github Codespaces should already have gem installed._

```sh
gem install bundler jekyll
```

then,

```sh
bundle update
```

### To serve the webpage locally for testing

```sh
bundle exec jekyll serve
```