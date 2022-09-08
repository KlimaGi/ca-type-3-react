import React, { useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Autocomplete
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CheckboxGroup, { CheckboxOption } from '../components/form-controls/checkbox-group'

const contentType2CheckboxOption = ({ id, title }: ContentType): CheckboxOption => ({
  value: id,
  label: title,
});

const checkboxOptionToContentType = ({ value, label }: CheckboxOption): ContentType => ({
  id: value,
  title: label,
});

const topics: Topic[] = [
  { id: '1', title: 'html' },
  { id: '2', title: 'css' },
  { id: '3', title: 'js' },
  { id: '4', title: 'dom' },
  { id: '5', title: 'typescript' },
  { id: '6', title: 'webpack' },
  { id: '7', title: 'git' },
  { id: '8', title: 'react' },
  { id: '9', title: 'node' },
  { id: '10', title: 'express' },
  { id: '11', title: 'sql' },
  { id: '12', title: 'mongodb' },
];

const contentTypes: ContentType[] = [
  { id: '1', title: 'posts' },
  { id: '2', title: 'videos' },
  { id: '3', title: 'questions' },
  { id: '4', title: 'tasks' },
];

const contentTypeOptions = contentTypes.map(contentType2CheckboxOption);

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedContentTypes, setSelectedContentTypes] = React.useState<CheckboxOption[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('siunciami duomenys i serveri per globalios busenos valdymo iranki');
    console.log({ email, password, selectedTopics, selectedContentTypes: selectedContentTypes.map(checkboxOptionToContentType), });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundImage: 'url(/image-bg.png)',
        backgroundSize: 'cover',
      }}>
      <Paper
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}
        elevation={10}
        onSubmit={handleSubmit}
      >
        <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
        <Typography component="h1" variant="h4" align='center'>Register</Typography>
        <TextField
          variant="filled"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Autocomplete
          options={topics}
          multiple
          getOptionLabel={({ title }) => title}
          value={selectedTopics}
          onChange={(_, newSelectedTopics) => setSelectedTopics(newSelectedTopics)}
          renderInput={(inputProps) => (
            <TextField
              label="Interesting topics"
              variant='filled'
              {...inputProps}
            />
          )}
        />

        <CheckboxGroup
          label="Interesting information types"
          name='interest-types'
          options={contentTypeOptions}
          value={selectedContentTypes}
          onChange={(_, newContentTypes) => setSelectedContentTypes(newContentTypes)}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ height: 60 }}
          size="large"
        >
          Sign In
        </Button>
      </Paper>
    </Box>
  )
}

export default RegisterPage
