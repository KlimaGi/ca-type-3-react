import React from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  styled,
  CheckboxProps
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import { StyledComponent } from '@emotion/styled';
import { MUIStyledCommonProps, Theme } from '@mui/system';

const LargeCheckbox = styled(Checkbox, {
  shouldForwardProp: (propName) => propName !== 'size',
})(({ size = 40 }) => ({
  svg: {
    height: size,
    width: size,
  }

})) as StyledComponent<Omit<CheckboxProps, 'size'> & MUIStyledCommonProps<Theme>, { size?: number }, {}>;

const LoginForm = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundImage: 'url(/)',
        background: 'cover',
      }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}>
        <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} />
        <Typography component="h1" variant="h3" align='center'>Login Form</Typography>
        <TextField />
        <TextField />
        <FormControlLabel
          control={<LargeCheckbox defaultChecked size={60} />}
          label="Label"
        />
        <Button variant="contained" sx={{ height: 60 }} size="large">Sign In</Button>
      </Paper>
    </Box>
  )
}

export default LoginForm;
