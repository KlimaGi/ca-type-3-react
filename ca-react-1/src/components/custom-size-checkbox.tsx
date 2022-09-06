import {
  Checkbox,
  styled,
  CheckboxProps
} from '@mui/material';

import { StyledComponent } from '@emotion/styled';
import { MUIStyledCommonProps, Theme } from '@mui/system';

const CustomSizeCheckbox = styled(Checkbox, {
  shouldForwardProp: (propName) => propName !== 'size',
})(({ size = 40 }) => ({
  svg: {
    height: size,
    width: size,
  }

})) as StyledComponent<Omit<CheckboxProps, 'size'> & MUIStyledCommonProps<Theme>, { size?: number }, {}>;

export default CustomSizeCheckbox;