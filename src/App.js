import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AutoComplete from './component/AutoComplete';
import Map from './component/Map';
import { Box, Grid, Typography } from '@mui/material';
import CustomButton from './component/CustomButton';
import { saveLocation } from './store/LocationSlice';

function App() {
  const { currentLocation, confirmMessage } = useSelector((state) => state.location)
  const dispatch = useDispatch()

  return (
    <>
      <Box sx={{ m: 2 }}>
        <AutoComplete />
      </Box>
      <Box sx={{ mx: 2 }}>
        <CustomButton onClick={() => dispatch(saveLocation(currentLocation))} buttonText="Add location to favourite" />
      </Box>
      <Box sx={{ mx: 2, mt: 2, mb: 4 }}>
        <Typography>{confirmMessage}</Typography>
      </Box>
      <Box sx={{ mx: 2 }}>
        <Map />
      </Box>
    </>
  );
}

export default App;
