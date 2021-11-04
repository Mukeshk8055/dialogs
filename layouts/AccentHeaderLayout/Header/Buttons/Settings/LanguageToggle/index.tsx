import internationalization from 'src/i18n/i18n';

import { useTranslation } from 'react-i18next';
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';

const SectionHeading = experimentalStyled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
        padding: ${theme.spacing(2, 2, 0)};
`
);

function LanguageToggle() {
  const { i18n } = useTranslation();
  const { t }: { t: any } = useTranslation();
  const getLanguage = i18n.language;

  const switchLanguage = ({ lng }: { lng: any }) => {
    internationalization.changeLanguage(lng);
  };

  return (
    <Box>
      <SectionHeading variant="body2" color="text.primary">
        {t('Choose you preferred language')}
      </SectionHeading>
      <List sx={{ p: 2 }} component="nav">
        <ListItem
          className={getLanguage === 'en' ? 'active' : ''}
          button
          onClick={() => switchLanguage({ lng: 'en' })}
        >
          <ListItemText primary="USA" />
        </ListItem>
        <ListItem
          className={getLanguage === 'de' ? 'active' : ''}
          button
          onClick={() => switchLanguage({ lng: 'de' })}
        >
          <ListItemText primary="Germany" />
        </ListItem>
        <ListItem
          className={getLanguage === 'es' ? 'active' : ''}
          button
          onClick={() => switchLanguage({ lng: 'es' })}
        >
          <ListItemText primary="Spain" />
        </ListItem>
        <ListItem
          className={getLanguage === 'fr' ? 'active' : ''}
          button
          onClick={() => switchLanguage({ lng: 'fr' })}
        >
          <ListItemText primary="France" />
        </ListItem>
        <ListItem
          className={getLanguage === 'cn' ? 'active' : ''}
          button
          onClick={() => switchLanguage({ lng: 'cn' })}
        >
          <ListItemText primary="China" />
        </ListItem>
        <ListItem
          className={getLanguage === 'ae' ? 'active' : ''}
          button
          onClick={() => switchLanguage({ lng: 'ae' })}
        >
          <ListItemText primary="United Arab Emirates" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}

export default LanguageToggle;
