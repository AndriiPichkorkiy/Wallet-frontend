import React, { useState } from 'react'

import { SelectWrapper, Select, Option, Svg } from './Select.styled'

const Selector = ({ list, title, name, onChange }) => {
  // const [choosenOption, setChoosenOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const onHandleClick = ({ target: { id, tagName } }) => {
    const element = document.getElementById(`${id}-icon`)
    element.classList.add('rotateOpen')
    element.classList.remove('rotateClose')

    setIsOpen(true)
  }

  // const onCloseEffect = ({ target: { id } }) => {
  //   const element = document.getElementById(`${id}-icon`)
  //   element.classList.remove('rotateOpen')
  //   element.classList.add('rotateClose')

  //   setIsOpen(false)
  // }

  // function onChangeLogic(e) {
  //   onCloseEffect(e)
  //   const element = document.getElementById(name)
  //   element.blur()

  //   if (e.target.selectedIndex !== choosenOption) onChange(e)

  //   setChoosenOption(e.target.selectedIndex)
  //   setIsOpen(false)
  // }

  // console.log('list', list)

  // const onHandleClick = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <SelectWrapper>
      <Svg id={`${name}-icon`} />
      <Select onClick={() => onHandleClick()}></Select>
    </SelectWrapper>
  )
}

export default Selector
