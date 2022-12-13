import React, { useState } from 'react'

import {
  SelectWrapper,
  Sel,
  List,
  ListOption,
  Svg,
  Title
} from './Select.styled'

const Select = ({ list, title, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [selected, setSelected] = useState(list[0].name)

  const onHandleOpen = e => {
    console.log('target', e.target)
    console.log('currentTarget', e.currentTarget)
    if (isOpen) {
      return
    }

    // const id = e.target.id
    // console.log('id', id)
    // const element = document.getElementById(`${id}-icon`)
    // console.log('element', element)
    // element.classList.add('rotateOpen')
    // element.classList.remove('rotateClose')
    setIsOpen(true)
  }

  const onHandleClose = e => {
    console.log('close target', e.target)
    // const id = e.target.id
    // console.log('id', id)
    // const element = document.getElementById(`${id}-icon`)
    // element.classList.remove('rotateOpen')
    // element.classList.add('rotateClose')
    setIsOpen(false)
  }
  const onHandleClick = e => {
    console.log('target', e.target)
    // const id = e.target.id
    // console.log('id', id)
    // const element = document.getElementById(`${id}-icon`)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <SelectWrapper id={'wrapper'}>
        <Title>{title}</Title>

        <Svg id={`${name}-icon`} onPointerDown={e => onHandleOpen(e)} />
        <Sel
          // id={name}
          type='button'
          onBlur={e => onHandleClose(e)}
          // onPointerDown={e => onHandleOpen(e)}
          // onKeyDown={e => onHandleClose(e)}
          onFocus={e => onHandleOpen(e)}
          // onClick={e => onHandleOpen(e)}
        ></Sel>
      </SelectWrapper>
      {isOpen && (
        <List>
          {list.map(item => (
            <ListOption key={item.id}>{item.name}</ListOption>
          ))}
        </List>
      )}
      <div
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'red'
        }}
      >
        qwe
      </div>
      <div
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'green'
        }}
      >
        qwe
      </div>
    </div>
  )
}

export default Select
