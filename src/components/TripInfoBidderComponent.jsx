export const TripInfoBidderComponent = ({
	dayCaption,
	hourCaption,
	departureCaption,
	arrivalCaption,
	color,
}) => {
	return (
		<div
			className='inCourseContainer'
			style={{ background: color, border: '1px solid' + color }}
		>
			<div className='firstLineInCourse'>
				<label className='dayCaptionInCourse'>{dayCaption}</label>
				<label className='hourCaptionInCourse'>{hourCaption}</label>
			</div>
			<label className='departureArrivalCaptions'>
				Partida: {departureCaption}
			</label>
			<label className='departureArrivalCaptions'>
				Llegada: {arrivalCaption}
			</label>
		</div>
	);
};
