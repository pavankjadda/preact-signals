import {Grid, InputAdornment, Paper, TextField} from '@mui/material';
import React from 'react';
import FindBookTable from './FindBookTable';
import SearchIcon from '@mui/icons-material/Search';
import {signal, useSignal} from '@preact/signals-react';

export const globalSearchText = signal('');
export default function FindBook() {
    const searchText = useSignal('');

    return (
        <Grid container className="custom-flex-justify-center" style={{height: 'auto', width: '100%'}}>
            <Grid size={{xs: 12, sm: 12, md: 12, lg: 11, xl: 11}}>
                <Paper elevation={24} style={{marginTop: '30px'}}>
                    <h2 className={'custom-flex-justify-center'}>Find Book</h2>
                    <hr/>
                    <div style={{margin: '50px'}}>
                        <TextField
                            style={{width: '100%'}}
                            id="search-text"
                            label="Find Book"
                            variant="filled"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                searchText.value = event.target.value;
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <FindBookTable searchText={searchText.value}/>
                </Paper>
            </Grid>
        </Grid>
    );
}
