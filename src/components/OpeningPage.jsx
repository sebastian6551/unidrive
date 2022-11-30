import unidriveLogo from '../assets/icons/unidriveLogo.png';
import IconButton from '@mui/material/IconButton';

export const OpeningPage = () => {
    return(
        <div>
            <IconButton sx={{flexGrow: 1, height:800, display: { xs: 'flex', md: 'flex' }}}>
                <img src={unidriveLogo}/>
            </IconButton>
        </div>
    )
}