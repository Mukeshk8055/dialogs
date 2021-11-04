import { IconButton, Popover, Tooltip, alpha } from '@material-ui/core';
import { useRef, useState } from 'react';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';

import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const IconButtonPrimary = experimentalStyled(IconButton)(
  ({ theme }) => `
    margin-left: ${theme.spacing(1)};
    background: ${theme.colors.alpha.trueWhite[10]};
    color: ${theme.colors.alpha.trueWhite[70]};
    padding: 0;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    transition: ${theme.transitions.create(['background', 'color'])};

    &.active,
    &:active,
    &:hover {
      background: ${alpha(theme.colors.alpha.trueWhite[30], 0.2)};
      color: ${theme.colors.alpha.trueWhite[100]};
    }
`
);

function HeaderSettings() {
  const { t }: { t: any } = useTranslation();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title={t('Settings')}>
        <IconButtonPrimary color="secondary" ref={ref} onClick={handleOpen}>
          <SettingsTwoToneIcon />
        </IconButtonPrimary>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <ThemeToggle />
        <LanguageToggle />
      </Popover>
    </>
  );
};

export default HeaderSettings;
