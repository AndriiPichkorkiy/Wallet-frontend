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
import { useGetCategoryQuery } from '../../services/transactionsApi'

const CssTextField = styled(InputBase)({
  '&': {
    fontFamily: 'Circe',
    fontSize: '18px',
    borderBottom: '1px solid #E0E0E0',
    background: '#FFFF',
    marginTop: '40px'
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
      color: '#000000'
      //   '&:hover': { color: 'red' },
      //   '& > li:hover': {
      //     color: 'blue '
      //   }
    }
  }
}
// const data = [
//   { id: 102, name: 'test1' },
//   { id: 103, name: 'test2' },
//   { id: 104, name: 'test3' },
//   { id: 105, name: 'test4' },
//   { id: 106, name: 'test5' },
//   { id: 107, name: 'test' }
// ]
// const ela = data.map(p => (p.id > 103 ? 123123123 : null))

export const StyledSelectCustomRenderValue = ({ value, onChange, name }) => {
  const { data } = useGetCategoryQuery()

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1, minWidth: '280px' }}>
        <Select
          renderValue={selected => {
            if (selected.length === 0) {
              return (
                <em style={{ color: '#BDBDBD', fontStyle: 'normal' }}>
                  Select a category
                </em>
              )
            }
            const { name } = data?.find(el => el.id === selected)

            return name
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
          {data?.map(
            el =>
              el.id < 10200 && (
                <MenuItem key={el.id} value={el.id}>
                  {el.name}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </Box>
  )
}
export const UnstyledSelectCustomRenderValue = ({ value, onChange, name }) => {
  const { data } = useGetCategoryQuery()
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1, minWidth: '280px' }}>
        <Select
          name={name}
          renderValue={selected => {
            if (selected.length === 0) {
              return (
                <em style={{ color: '#BDBDBD', fontStyle: 'normal' }}>
                  Select a category
                </em>
              )
            }
            const { name } = data?.find(el => el.id === selected)

            return name
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
          {data?.map(
            el =>
              el.id > 10200 && (
                <MenuItem key={el.id} value={el.id}>
                  {el.name}
                </MenuItem>
              )
          )}
          {/* <MenuItem value='10501'>Regular Income</MenuItem>
          <MenuItem value='10501'>Irregular Income</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  )
}
