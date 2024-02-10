import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
const AdaptiveCardMessage = React.lazy(() => import('../components/AdaptiveCardMessage'));
interface SingleChat {
    value: string;
    name: string;
}
interface Message {
    fromUser: string;
    content: string;
    contentType: string;
}
interface SingleChat {
    messages: Message[];
}
interface SingleChatProps {
    Singlechatdetails: SingleChat;
}
const Singlechatdetails: React.FC<SingleChatProps> = ({ Singlechatdetails }: SingleChatProps) => {
    const { mode } = useThemeContext();
    const darkmodeswrapper = {
        color: mode === 'dark' ? 'white' : 'black',
        background: mode === 'dark' ? '#616A6B' : 'white',
        minHeight: 'auto',
        width: '100%',
    };

    console.log("Single Chat Details", Singlechatdetails);
    const renderMessageContent = (message: Message) => {
        switch (message.contentType) {
            case 'text':
                return <div>{message.content}</div>;
            case 'adaptiveCard':
                return <AdaptiveCardMessage content={message.content} />;
            default:
                return <div>{message.content}</div>;
        }
    };

    return (
        <>
            <Card className="singlechart-container" sx={darkmodeswrapper}>
                <Box className="singletitle">
                    <Typography variant="h5" gutterBottom className='chattitle'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                </Box>
                <Box className="chats-conatiner">
                    <div className="chat-container">
                        <div className="message-container">
                            {Singlechatdetails.messages.map(message => (
                                <div className={message.fromUser === 'assistant' ? "message sender-message" : "message receiver-message"}>
                                    <img src={message.fromUser === 'assistant' ? "https://media.geeksforgeeks.org/wp-content/uploads/20220123013311/gfg.png" : "https://media.geeksforgeeks.org/wp-content/uploads/20210511160813/g4g.jpg"} alt={message.fromUser === 'assistant' ? "Sender Avatar" : "Receiver Avatar"} className="avatar" />
                                    {renderMessageContent(message)}
                                </div>
                            ))}
                        </div>
                    </div>
                </Box>
                <Box className="inputchats">
                    <TextField id="outlined-basic" variant="outlined" style={{ width: "80%" }}
                        placeholder='Enter Your Messages' />
                    <Button variant='contained' color='success'
                        style={{ borderRadius: "20px" }}>Send</Button>
                </Box>
            </Card>
        </>
    )
}

export default Singlechatdetails