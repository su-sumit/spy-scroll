# spy-scroll

[![npm version](https://img.shields.io/npm/v/spy-scroll.svg?style=flat-square)](https://www.npmjs.com/package/spy-scroll)

> Scrollspy a clone of [react-scrollspy](https://github.com/makotot/react-scrollspy) using Intersection observer.

## Why bother duplicating ?
My problem. My solution.

## Install

```sh
$ npm i spy-scroll
```


## Usage

```js
import Scrollspy from 'spy-scroll'

...

<ScrollSpy items={['item-1', 'item-2', 'item-3']} currentClassName="active" scrolledPastClassName="past">
  { items.map(item => (
    <li key={title} id={title} >
      <a to={url}>{title}</a>
    </li>
  ))}
</ScrollSpy>

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

HTML tag or React Component type for Scrollspy component if you want to use something other than `ul` [optional].

### `style={ Object }`

Style attribute to be passed to the generated &lt;ul/&gt; element [optional].

### `offset={ String }`

Offset value that adjusts to determine the elements to set active read more [here](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) [optional].

default: `-25% 0px -35% 0px`

```js
  <ScrollSpy offset="-30% 0px -40% 0px">
    ...
  </ScrollSpy>
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
