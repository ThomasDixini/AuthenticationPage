import { Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { useState } from "react";
import { blue } from "@mui/material/colors";

export function ValidationFields() {
    const [flag, setFlag] = useState('Brasil')

    function handleChange(event: SelectChangeEvent) {
        setFlag(event.target.value)
    }

    return(
        <div className="text-white-0">
            <InputLabel id="flag-select-label" className="mt-8 text-white-0"> Select document issues country </InputLabel>
            <Select
                className="w-full text-white-0 mt-2"
                labelId="flag-select-label"
                id="flag-select"
                value={flag}
                label="flag"
                onChange={handleChange}
                sx={{
                    outline: '10px'
                }}
            >
                <MenuItem value="USA">United States</MenuItem>
                <MenuItem value="Brasil">Brasil</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
            </Select>
            <div className="flex flex-col gap-8 mt-8">
                <input type="text" className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200" placeholder="First Name"/>
                <input type="text" className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200" placeholder="Last Name"/>
                <input type="number" className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200" placeholder="ID Number"/>
                <input type="date" className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200" placeholder="Birthday"/>
            </div>
        </div>
    );
}