import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Badge from '@mui/material/Badge';

const FooterNavigate = () => {
    return (
        <div style={{
            position: 'fixed', bottom: '0px', left: '0px',
            height: '60px', width: '100%', backgroundColor: 'white'
        }}>

            <div style={{
                width: '94%', margin: 'auto', height: '50px', display: 'flex',
                alignItems: 'center', justifyContent: 'space-between',
            }}>
                <HomeRoundedIcon style={{ fontSize: '30px' }} />
                <SearchRoundedIcon style={{ fontSize: '30px' }} />
                <VideoCameraFrontRoundedIcon style={{ fontSize: '30px' }} />
                {/* <Badge badgeContent={4} color="primary"
                    sx={{ "& .MuiBadge-badge": {  height: 20, } }}
                > */}
                <SendRoundedIcon style={{ fontSize: '30px' }} />
                {/* </Badge> */}
                <AddCircleRoundedIcon style={{ fontSize: '30px' }} />

            </div>

        </div>
    )
}

export default FooterNavigate