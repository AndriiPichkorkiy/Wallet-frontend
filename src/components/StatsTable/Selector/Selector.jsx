import React from 'react'

import { SelectWrapper, Select, Option, Svg } from './Selector.styled'

const Selector = ({ list, title, name, onChange }) => {
  const onOpenEffect = ({ target: { id, tagName } }) => {
    // if (!tagName && tagName !== 'SELECT') {
    //   return
    // }
    const element = document.getElementById(`${id}-icon`)
    element.classList.toggle('rotate')
  }
  const onCloseEffect = ({ target: { id } }) => {
    const element = document.getElementById(`${id}-icon`)
    element.classList.toggle('rotate')
  }

  return (
    <SelectWrapper>
      <Svg id={`${name}-icon`} />
      <Select
        onBlur={e => onCloseEffect(e)}
        onClick={e => onOpenEffect(e)}
        onChange={onChange}
        defaultValue={title}
        name={name}
        id={name}
      >
        <Option value='hide'>{title}</Option>
        {list.map(item => (
          <Option key={item.id} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  )
}

export default Selector
