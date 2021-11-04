

import { Box, List, ListItem, ListItemText, 
  // Menu, MenuItem,
   TextField, InputAdornment,
    // Link 
  } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import './HeaderCss.css'
import axios from 'axios';


function HeaderMenu() {
  const { t }: { t: any } = useTranslation();

  const ref = useRef<any>(null);
  // const [isOpen, setOpen] = useState<boolean>(false);

  // const handleOpen = (): void => {
  //   setOpen(true);
  // };

  // const handleClose = (): void => {
  //   setOpen(false);
  // };

  const SearchInputWrapper = experimentalStyled(TextField)(
    ({ theme }) => `
    .MuiInputBase-input {
      font-size: ${theme.typography.pxToRem(17)};
    }
    `
  );

  // https://api.einstonlabs.com/api/v1/event/search,

  // const [searchData, setSearchData] = useState<[]>([]);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const response = await axios.post("https://api.einstonlabs.com/api/v1/event/search");
  //     console.log("Search",response.data)
  //     setSearchData(response.data.data);

  //   }

  //   fetchMyAPI()

  // }, [])

  const [searchValue, setSearchValue] = useState("");
  const Calling = (e) => {
    console.log(e.target.value);
    const data = { text: e.target.value }
    setSearchValue(e.target.value)

    async function fetchMyAPI() {
      const response = await axios.post("https://api.einstonlabs.com/api/v1/event/search", data);
      console.log("Search", response.data)
      // setSearchData(response.data.data);

    }

    fetchMyAPI()

  }

  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <List sx={{ pl: { xs: 0, md: 2 } }} component={Box} display="flex">

        <ListItem
          classes={{ root: 'MuiListItem-indicators' }}
          button
          ref={ref}
          // onClick={handleOpen}
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary={
              <Box display="flex" alignItems="center">
                {t('Solutions')}
                <Box display="flex" alignItems="center" pl={0.3}>
                  <ExpandMoreTwoToneIcon fontSize="small" />
                </Box>
              </Box>
            }
          />
        </ListItem>
      </List>


      <Box className="searchBar" sx={{ width: "40vw" }}>
        <SearchInputWrapper
          autoFocus={true}
          onChange={Calling}
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            )
          }}
          placeholder={t('Search..')}
          fullWidth
        />
      </Box>


      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 1, fontSize: "large"
          },
        }}
        onClick={preventDefault}
      >
        {/* <Link href="#" color="inherit">
          {'Dashboard'}
        </Link> */}
      </Box>

    

      {/* <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen} >
        <MenuItem component="a" href="#dashboards-preview">
          {t('Projects')}
        </MenuItem>
        <MenuItem component="a" href="#applications-preview">
          {t('Classrooms Experience')}
        </MenuItem>
        <MenuItem component="a" href="#management-preview">
          {t('360 Interview')}
        </MenuItem>
      </Menu> */}
    </>
  );
}

export default HeaderMenu;
