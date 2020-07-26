# spy-scroll

[![npm version](https://img.shields.io/npm/v/spy-scroll.svg?style=flat-square)](https://www.npmjs.com/package/spy-scroll)

> SpyScroll a clone of [react-scrollspy](https://github.com/makotot/react-scrollspy) using Intersection observer.

## Why bother duplicating ?
I wanted the active item to stay active until a new item start intersecting the offset. 

`eg: My blog's .mdx files table of content items switch from active to inactive whenever the heading linked to them go out of viewport but the content related to that heading is still in viewport.`

## Install

```sh
$ npm i spy-scroll
```


## Usage

```js
import SpyScroll from 'spy-scroll'

...

<SpyScroll items={[{title: 'item-1', url:'#item-1'}, {title: 'item-2', url:'#item-2'}, {title: 'item-3', url:'#item-3'}]} currentClassName="active" scrolledPastClassName="past">
  { items.map(({title, url}) => (
    <li key={title} id={title} >
      <a to={url}>{title}</a>
    </li>
  ))}
</SpyScroll>

...
```


## Props

### `items={ Array }`

Id list of target contents.

### `currentClassName={ String }`

Class name that apply to the navigation element paired with the content element in viewport.

### `scrolledPastClassName={ String }`

Class name that apply to the navigation elements that have been scrolled past [optional].

### `tag={ String | React element type }`

HTML tag or React Component type for SpyScroll component if you want to use something other than `ul` [optional].

### `style={ Object }`

Style attribute to be passed to the generated &lt;ul/&gt; element [optional].

### `offset={ String }`

Offset value that adjusts to determine the elements to set active read more [here](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) [optional].

default: `-25% 0px -35% 0px`

```js
  <SpyScroll offset="-30% 0px -40% 0px">
    ...
  </SpyScroll>
```

## Development

```sh
$ git clone https://github.com/su-sumit/spy-scroll.git
$ cd spy-scroll
$ yarn i
$ yarn start
```

## Contributing

Pull requests and [reporting an issue](https://github.com/su-sumit/spy-scroll/issues/new) are always welcome :)


## License

MIT
