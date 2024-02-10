import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useThemeContext } from '@/muitheme/ThemeContextProvider';

const Chatmenu = () => {
    return (
        <>
            <Typography variant="h4" gutterBottom className='chatmenu-head'>
                BlueFlame
            </Typography>
            <Box className='chatmenu-container'>
                <Link href={"/dashboard"} className='chatmenulinks'><ChatBubbleIcon />Chat</Link>
                <Link href={""} className='chatmenulinks'><QuestionMarkIcon />Q & A</Link>
                <Link href={""} className='chatmenulinks'><DriveFileMoveIcon />File Management</Link>
                <Link href={""} className='chatmenulinks'><EqualizerIcon />Usage Analysis</Link>
                <Link href={""} className='chatmenulinks'><MenuOpenIcon />Adult</Link>
                <Link href={""} className='chatmenulinks'><SettingsApplicationsIcon />Configuration</Link>
            </Box>
        </>
    )
}

export default Chatmenu