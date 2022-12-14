import React from 'react';
import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';

const RightBar = () => (
  // todo: create more components from this data
  <Box
    flex={2}
    p={2}
    sx={{ display: { xs: 'none', sm: 'block' } }}
  >
    <Box position="fixed" width={300}>
      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={6}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/9.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/10.jpg" />
      </AvatarGroup>

      <Typography variant="h6" fontWeight={100} mt={2} mb={2}> Latest Photos</Typography>

      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="Coffee" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" alt="Hats" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" alt="Honey" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt="Basketball" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" alt="Fern" />
        </ImageListItem>
      </ImageList>

      <Typography variant="h6" fontWeight={100} mt={2}> Latest Conversations</Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={(
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" ??? I'll be in your neighborhood doing errands this???"}
              </>
            )}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={(
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" ??? Wish I could come, but I'm out of town this???"}
              </>
            )}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={(
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' ??? Do you have Paris recommendations? Have you ever???'}
              </>
            )}
          />
        </ListItem>
      </List>

    </Box>
  </Box>
);

export default RightBar;
