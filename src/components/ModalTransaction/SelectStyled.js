import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
// import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase'
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles'

const CssTextField = styled(InputBase)({
  '&': {
    borderBottom: '1px solid #E0E0E0',
    background: '#FFFF'
    // paddingLeft: '20px'
  },
  '& label.Mui-focused': {
    color: '#E0E0E0'
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: '#E0E0E0',
    background: '#FFFF'
  },
  '& .MuiInputBase-input': {
    borderBottomColor: '#E0E0E0',
    paddingLeft: '20px'
    // background: 'red',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      background: 'red'
    },
    '&:hover fieldset': {
      background: 'yellow'
    },
    '&.Mui-focused fieldset': {
      background: 'green'
    }
  }
})

const MenuProps = {
  PaperProps: {
    sx: {
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      color: 'red'
    }
  }
}

export const StyledSelectCustomRenderValue = ({ value, onChange, name }) => {
  // const [categories, setCategories] = React.useState('')
  // const handleChange = (e) => setCategories(e.target.value)
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1, minWidth: '280px' }}>
        <Select
          renderValue={selected => {
            if (selected.length === 0) {
              return <em style={{ color: '#BDBDBD' }}>select a category</em>
            }
            return selected
          }}
          name={name}
          variant='standard'
          value={value}
          onChange={onChange}
          displayEmpty
          input={<CssTextField />}
          MenuProps={MenuProps}
          //   InputProps={{
          //         endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          //       }}
        >
          <MenuItem value='10101'>Main expenses</MenuItem>
          <MenuItem value='10102'>Products</MenuItem>
          <MenuItem value='10103'>Car</MenuItem>
          <MenuItem value='10104'>Self care</MenuItem>
          <MenuItem value='10105'>Child care</MenuItem>
          <MenuItem value='10106'>Household products</MenuItem>
          <MenuItem value='10107'>Education</MenuItem>
          <MenuItem value='10108'>Leisure</MenuItem>
          <MenuItem value='10109'>Other expenses</MenuItem>
          <MenuItem value='10110'>Entertainment</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export const UnstyledSelectCustomRenderValue = ({ value, onChange, name }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1, minWidth: '280px' }}>
        <Select
          name={name}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em style={{ color: '#BDBDBD' }}>select a category</em>
            }
            return selected
          }}
          //   IconComponent={<InputAdornment position="end">kg<InputAdornment>}
          variant='standard'
          value={value}
          onChange={onChange}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          displayEmpty
          input={<CssTextField />}
          //   sx={{ background: '#fff', border:'none' , color:'#BDBDBD'}}
          MenuProps={MenuProps}
          //   InputProps={{
          //         endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          //       }}
        >
          <MenuItem value='10501'>Regular Income</MenuItem>
          <MenuItem value='Irregular Income'>Irregular Income</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
