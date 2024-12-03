import { TextField, SxProps } from '@mui/material';
import { useState } from 'react';

interface StyledTextFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  sx?: SxProps; // Allow custom styles if needed
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
}) => {
  const [focused, setFocused] = useState(false); // Track focus state

  const isShrink = focused || value !== ''; // Check if label should shrink

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
          top: isShrink ? '-40%' : '0',
          left: isShrink ? 6 : 16,
          fontSize: isShrink ? '16px' : '20px',
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
