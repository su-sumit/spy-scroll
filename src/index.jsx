import React, { useEffect, useState } from "react"
import classNames from "classnames"
import PropTypes from 'prop-types';

ScrollSpy.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentClassName: PropTypes.string.isRequired,
  scrolledPastClassName: PropTypes.string,
  style: PropTypes.object,
  componentTag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  offset: PropTypes.string,
  rootElm: PropTypes.string,
}

ScrollSpy.defaultProps = {
  items: [],
  currentClassName: '',
  scrolledPastClassName: '',
  style: {},
  rootElm: 'ul',
  offset: '-25% 0px -35% 0px'
}

export default function ScrollSpy(props) {
  const {
    items,
    currentClassName,
    scrolledPastClassName,
    tag: Tag,
    className,
    children,
    offset,
    style
  } = props

  const [activeItemIndex, setActive] = useState(0)

  useEffect(() => {

    const options = {
      root: null,
      threshold: 1,
      rootMargin: offset
    }
    
    let observer = new IntersectionObserver((entries) => {
      if(entries[0].intersectionRatio) {
        const idx = items.findIndex(elem => elem === entries[0].target.id)
        setActive(idx)
      }
    }, options);

    // set targets for observer
    items.forEach(id => {
      const elem = document.querySelector(`#${id}`);
      observer.observe(elem)
    })

    return () => observer.disconnect()

  }, [items]);
  
  if(children.length !== items.length) {
    console.error('SCROLL-SPY: items and childrens length should be same')
  }
  
  if(children) {
    return (
      <Tag className={ className } style={ style }>
        {
          props.children.map((child, idx) => {

            if(!React.isValidElement(child)) return

            const ChildTag = child.type
            const isActive = idx === activeItemIndex
            const isScrolledPast = idx < activeItemIndex

            const childClass = classNames({
              [`${ child.props.className }`]: child.props.className,
              [`${ currentClassName }`]: isActive,
              [`${ scrolledPastClassName }`]: isScrolledPast,
            })

            return (
              <ChildTag key={ child.props.id } { ...child.props } className={ childClass }>
                { child.props.children }
              </ChildTag>
            )
          })
        }
      </Tag>
    )
  }
}
