import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { SxProps } from '@mui/material';

interface SelectMenuItem {
  id: number;
  name: string;
}

interface MultipleSelectChipProps {
  label: string;
  options: SelectMenuItem[];
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
  sx?: SxProps; // Allow custom styles if needed
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, selectedValues: string[], theme: Theme) {
  return {
    fontWeight: selectedValues.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MultipleSelectChip: React.FC<MultipleSelectChipProps> = ({ label, options, value, onChange, sx = {} }) => {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel
          id="demo-multiple-chip-label"
          sx={{
            fontFamily: 'Prompt', // Apply font family for the label
            fontSize: value.length > 0 ? {xs:'12px',sm:'16px'} : {xs:'16px',sm:'20px'},
            transition: 'all 0.2s ease',
            padding: '0px 16px',
            '& input': {
              padding: '8px 10px',
            },
            backgroundColor: value.length > 0 ? '#fff' : '#fff',
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput id="select-multiple-chip" label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip 
                key={value} 
                label={value} 
                sx={{ fontFamily: 'Prompt' }}  // Apply the Prompt font to each Chip
              />
            ))}
          </Box>
          
          )}
          MenuProps={MenuProps}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px', // Round borders
              padding: '10px 16px',
              '& input': {
                padding: '8px 10px',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '30px',
            },
            '& .MuiInputLabel-root': {
              fontFamily: 'Prompt', // Apply font family for the label
            },
            ...sx, // Allow additional styles if needed
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.name}
              style={{
                ...getStyles(option.name, value, theme),
                borderRadius: '10px', // Add border radius to the MenuItem options
                fontFamily: 'Prompt', // Set font family to Prompt inside the option
              }}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectChip;
