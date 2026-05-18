import { useState } from 'react';
import "./style.css"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme,  ThemeProvider } from '@mui/material';
import Grid from '../Grid';
import Lists from '../List';
import { Link } from 'react-router-dom';

export default function TabsComponent({ coins }) {
    const [value, setValue] = useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#3a80e9",
            },
        },
    })

    const style = {
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.2rem',
        fontFamily: 'Inter,sans-serif',
        textTransform: 'capitalize',


    };

    return (
        <ThemeProvider theme={theme}>
            <TabContext value={value}>

                <TabList onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth'>
                    <Tab label="Grid" value="grid" sx={style} />
                    <Tab label="List" value="list" sx={style} />

                </TabList>

                <TabPanel value="grid">
                    <div className='grid-flex'>
                        {Array.isArray(coins) && coins.map((coin, i) => {
                            return (

                                <Link to={`/coin/${coin.id}`}>
                                    {coin && <Grid coin={coin} key={i + 1} />}
                                </Link>

                            );
                        })}
                    </div>
                </TabPanel>
                <TabPanel value="list">
                    <table className='list-flex'>

                        {Array.isArray(coins) && coins.map((coin, i) => {
                            return (
                                <Link to={`/coin/${coin.id}`}>

                                    {coin && <Lists key={i} coin={coin} />}
                                </Link>
                            );
                        })}
                    </table>
                </TabPanel>



            </TabContext>
        </ThemeProvider>
    );
}
