import { Paper, Typography } from '@mui/material';

export const RedBoxInterfaceTitleComponent = props => {
	return (
		<Paper
			
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				width: 305,
				height: 49,
				background: '#D83C3E',
				borderRadius: 3,
			}}
		>
			<Typography
				
				sx={{		
					textAlign: 'left',		
					fontFamily: 'jost',
					fontStyle: 'normal',
					fontSize: 25,
					fontWeight: 400,
					color: '#FFFFFF',				
				}}
			>
				{' '}
				{props.title}{' '}
			</Typography>
		</Paper>
	);
};
