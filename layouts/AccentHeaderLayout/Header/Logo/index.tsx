import { Box, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';

const LogoWrapper = experimentalStyled(Link)(
  ({ theme }) => `
        color: ${theme.colors.alpha.trueWhite[100]};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        width: 52px;
        height: 38px;
        transform: scale(.8);
        transition: ${theme.transitions.create(['transform'])};

        &:hover {
        transform: scale(1);
        }
`
);

const LogoSign = experimentalStyled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.trueWhite[70]};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

        &:after, 
        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -1px;
            right: -20px;
            transform: rotate(0deg);
            border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
            background: ${theme.colors.alpha.trueWhite[50]};
            right: auto;
            left: 0;
            top: 20px;
        }

        &:after {
            background: ${theme.colors.alpha.trueWhite[30]};
        }
`
);

const LogoSignInner = experimentalStyled(Box)(
  ({ theme }) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`
);

function Logo() {
  return (
    <Tooltip arrow placement="right" title="Tokyo React Admin Dashboard">
      <LogoWrapper to="/overview">
        <LogoSignWrapper>
          <LogoSign>
            <LogoSignInner />
          </LogoSign>
        </LogoSignWrapper>
      </LogoWrapper>
    </Tooltip>
  );
}

export default Logo;
