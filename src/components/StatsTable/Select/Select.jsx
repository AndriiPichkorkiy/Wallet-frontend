import React, { useEffect, useState, useCallback } from 'react'

import {
  SelectWrapper,
  Selector,
  List,
  ListOption,
  Svg,
  Title,
  CategoryTitle,
  CategorySvg,
  CategorySelect
} from './Select.styled'

const Select = ({ list, title, name, onChange, isModal, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [selected, setSelected] = useState(null)

  const onHandleClick = useCallback(
    e => {
      const id = e.target.id
      const element = document.getElementById(`${id}-icon`)
      if (isOpen) {
        element?.classList.remove('rotateOpen')
        element?.classList.add('rotateClose')
        setIsOpen(false)
        return
      }
      element?.classList.add('rotateOpen')
      element?.classList.remove('rotateClose')
      setIsOpen(true)
    },
    [isOpen]
  )

  const onHandleBlur = e => {
    setIsOpen(false)
    const id = e.target.id
    const element = document.getElementById(`${id}-icon`)
    element.classList.remove('rotateOpen')
    element.classList.add('rotateClose')
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
        onBlur={e => onHandleBlur(e)}
        onDoubleClick={() => {
          return
        }}
        onClick={e => onHandleClick(e)}
        onTouchCancel={e => onHandleClick(e)}
      >
        {isModal ? (
          <CategorySelect id={name} type='button'></CategorySelect>
        ) : (
          <Selector id={name} type='button'></Selector>
        )}
        {isModal ? (
          <CategoryTitle>{selected ? selected : title}</CategoryTitle>
        ) : (
          <Title>{selected ? selected : title}</Title>
        )}
        {isModal ? (
          <CategorySvg id={`${name}-icon`} className={'rotateClose'} />
        ) : (
          <Svg id={`${name}-icon`} className={'rotateClose'} />
        )}

        {isOpen && !isLoading ? (
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
        ) : null}
      </SelectWrapper>
    </>
  )
}

export default Select
