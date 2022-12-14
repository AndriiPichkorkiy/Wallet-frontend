import React, { useEffect, useState } from 'react'

import {
  SelectWrapper,
  Selctor,
  List,
  ListOption,
  Svg,
  Title
  // CategoryTitle,
  // CategorySelect
} from './Select.styled'

const Select = ({ list, title, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [selected, setSelected] = useState(null)

  const onHandleClick = e => {
    const id = e.target.id
    const element = document.getElementById(`${id}-icon`)
    if (isOpen) {
      element.classList.remove('rotateOpen')
      element.classList.add('rotateClose')
      setIsOpen(false)
      return
    }
    element.classList.add('rotateOpen')
    element.classList.remove('rotateClose')
    setIsOpen(true)
  }

  const onHandleSelect = e => {
    setSelected(e.target.innerText)
    setValue(e.target.value)
  }

  useEffect(() => {
    if (selected) onChange(name, value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <>
      <SelectWrapper
        onBlur={e => onHandleClick(e)}
        onDoubleClick={() => {
          return
        }}
        onClick={e => onHandleClick(e)}
      >
        <Title>{selected ? selected : title}</Title>
        <Svg id={`${name}-icon`} />
        <Selctor id={name} type='button'></Selctor>
        {isOpen && (
          <List>
            {list.map(item => (
              <ListOption
                name={name}
                value={item.id}
                onPointerDown={e => onHandleSelect(e)}
                key={item.id}
              >
                {item.name}
              </ListOption>
            ))}
          </List>
        )}
      </SelectWrapper>
    </>
  )
}

export default Select
