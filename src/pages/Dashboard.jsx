import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/material';
import Cards from '../components/dashboard/Cards';


function Dashboard() {

  const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
  }));

 

  return (
    <>
        <Grid size={5}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Cards />
            </Box>
        </Grid>
    </>
  )
}

export default Dashboard