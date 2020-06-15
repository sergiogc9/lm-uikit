import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import TextField from './lib/TextField';
import Switch from './lib/Switch';
import Select from './lib/Select';
import ThemeProvider from './lib/ThemeProvider/ThemeProvider';

import './App.css';

const selectOptions = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
]

function App() {
  const [checked, setChecked] = React.useState(false);

  return (
    // Change error to primary to see green color changing to green. Set error prop in text field to see error changing color
    <ThemeProvider palette={{ error: { main: '#1E90FF' } }}>
      <div className="test-container">
        <span>TextField:</span>
        <TextField label="awesome" />
        <span>TextField with search icon:</span>
        <TextField label="awesome" InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }}/>
        <span>Switch:</span>
        <Switch checked={checked} onChange={() => setChecked(c => !c)} />
        <span>Select:</span>
        <Select defaultValue={[selectOptions[1], selectOptions[5]]} options={selectOptions} isMulti />
      </div>
    </ThemeProvider>
  );
}

export default App;
