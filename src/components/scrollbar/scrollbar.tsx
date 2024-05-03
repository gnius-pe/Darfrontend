import * as PropTypes from 'prop-types';
import { forwardRef, memo } from 'react';

import Box from '@mui/material/Box';

import { StyledScrollbar, StyledRootScrollbar } from './styles';

// ----------------------------------------------------------------------

interface ScrollbarProps {
  children: React.ReactNode;
  sx?: object;
}

const Scrollbar = forwardRef<HTMLElement, ScrollbarProps>(
  ({ children, sx,...other }, ref) => {
    const userAgent = typeof navigator === 'undefined'? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto',...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  },
);

Scrollbar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default memo(Scrollbar);