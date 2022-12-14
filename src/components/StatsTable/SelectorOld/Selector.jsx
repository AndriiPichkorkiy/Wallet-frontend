import React, { useState } from 'react'

import { SelectWrapper, Select, Option, Svg } from './Selector.styled'

const Selector = ({ list, title, name, onChange }) => {
  const [choosenOption, setChoosenOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const onOpenEffect = ({ target: { id, tagName } }) => {
    console.log('id', id)
    const element = document.getElementById(`${id}-icon`)
    element.classList.add('rotateOpen')
    element.classList.remove('rotateClose')

    setIsOpen(true)
  }
  const onCloseEffect = ({ target: { id } }) => {
    const element = document.getElementById(`${id}-icon`)
    element.classList.remove('rotateOpen')
    element.classList.add('rotateClose')

    setIsOpen(false)
  }

  function onChangeLogic(e) {
    onCloseEffect(e)
    const element = document.getElementById(name)
    element.blur()

    if (e.target.selectedIndex !== choosenOption) onChange(e)

    setChoosenOption(e.target.selectedIndex)
    setIsOpen(false)
  }

  // console.log('list', list)

  return (
    <SelectWrapper>
      <Svg id={`${name}-icon`} />
      <Select
        onBlur={onCloseEffect}
        onFocus={onOpenEffect}
        onChange={onChangeLogic}
        onClick={e => {
          if (isOpen) return
          if (e.target.selectedIndex === choosenOption) onChangeLogic(e)
        }}
        defaultValue={title}
        name={name}
        id={name}
      >
        <Option value=''>{title}</Option>
        {list.map(item => (
          <Option key={item.id} value={item.id} onSelect={console.log}>
            {item.name}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  )
}

export default Selector
