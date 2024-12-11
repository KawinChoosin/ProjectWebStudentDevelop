import { TextField, SxProps } from '@mui/material';
import { useState } from 'react';

interface StyledTextFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: string;
  sx?: SxProps;
  multiline?: boolean; // Add support for multiline input
  rows?: number; // Add support for specifying the number of rows
  defaultValue?: string; // Add support for default value
}

const StyledTextField: React.FC<StyledTextFieldProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  error = false,
  helperText = '',
  sx = {},
  multiline = false,
  rows = 1,
  defaultValue = '', // Provide default value if needed
}) => {
  const [focused, setFocused] = useState(false);

  const isShrink = focused || value !== '';

  return (
    <TextField
      required
      id={id}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline={multiline} // Support multiline input
      rows={multiline ? rows : undefined} // Set rows if multiline is enabled
      defaultValue={defaultValue} // Set default value if provided
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '30px',
          padding: '10px 16px',
          '& input': {
            padding: '8px 10px',
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '30px',
        },
        '& .MuiInputLabel-root': {
          top: multiline
          ? isShrink
            ? '-25%'  // When multiline and isShrink is true
            : '0'     // When multiline and isShrink is false
          : isShrink
          ? '-40%'    // When not multiline and isShrink is true
          : '0', 
          left: isShrink ? 6 : 16,
          fontSize: isShrink ? {xs:'12px',sm:'16px'} : {xs:'16px',sm:'20px'},
          backgroundColor: isShrink ? '#fff' : 'transparent',
          padding: isShrink ? '0 4px' : '0',
          transition: 'all 0.2s ease',
          pointerEvents: isShrink ? 'auto' : 'none',
          fontFamily: 'Prompt',
        },
        '& .MuiFormHelperText-root': {
          fontFamily: 'Prompt', // Set font family for the error message
        },
        ...sx, // Allow additional styles if needed
      }}
      InputLabelProps={{
        shrink: false, // Disable default shrink behavior
      }}
    />
  );
};

export default StyledTextField;
