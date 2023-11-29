import { InputBase, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid #4b5563',
    fontSize: 16,
    padding: '16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#60a5fa',
    },
  },
}));

export function ValidationFields() {
  const [flag, setFlag] = useState("Brasil");

  function handleChange(event: SelectChangeEvent) {
    setFlag(event.target.value);
  }

  return (
    <div className="text-white-0">
      <InputLabel id="flag-select-label" className="mt-8 text-white-0" sx={{
        color: 'white'
      }}>
        {" "}
        Select document issues country{" "}
      </InputLabel>
      <Select
        className="w-full text-white-0 mt-2 focus:outline-2 focus:outline-white-0"
        labelId="flag-select-label"
        id="flag-select"
        value={flag}
        label="flag"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label'}}
        input={<BootstrapInput />}
      >
        <MenuItem value="USA">United States</MenuItem>
        <MenuItem value="Brasil">Brasil</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
      </Select>

      <div className="flex flex-col gap-8 mt-8">
        <input
          type="email"
          className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200"
          placeholder="Your Email"
        />
        <input
          type="password"
          className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200"
          placeholder="Your Password"
        />
        <input
          type="password"
          className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200"
          placeholder="Confirm Your Password"
        />
      </div>
    </div>
  );
}
