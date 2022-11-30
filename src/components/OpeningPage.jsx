import unidriveLogo from '../assets/icons/unidriveLogo.png';
import { ImageButton } from  '@mui/material';

export const OpeningPage = () => {
    const handleClick = event => {
		event.preventDefault();		
	};

    return(
        <div>
            <ImageButton onClick={handleClick} style={ {backgroundImage: `url(${unidriveLogo})`}}>
                jje
               </ImageButton>
        </div>
    )
}