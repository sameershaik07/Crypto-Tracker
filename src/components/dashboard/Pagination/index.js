import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./style.css"


export default function PaginationComponent({page, handlePage}) {
    

    return (

        <div className='pagination'>


            <Pagination count={10} page={page} onChange={handlePage}

                sx={{
                    "& .MuiPaginationItem-text": {
                        color: "#fff !important",
                        border: "1px solid var(--grey)",
                    },
                    "& .MuiPaginationItem-text:hover": {
                        backgroundColor: "transparent !important",
                    },
                    "& .Mui-selected  ": {
                        backgroundColor: "var(--violet) !important",
                        borderColor: "var(--violet) ",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        border: "none",
                    },
                }} />

        </div>
    );
}
