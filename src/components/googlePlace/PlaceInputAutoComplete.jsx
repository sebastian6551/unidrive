import PlacesAutocomplete from 'react-places-autocomplete';
import { useState } from 'react';

export const PlaceInputAutoComplete = () => {
	const [address, setAddress] = useState('');

	const handleSelect = async value => {
		setAddress(value);
	};

	// limite principal search area to valle del cauca
	const searchOptions = {
		// eslint-disable-next-line no-undef
		location: new google.maps.LatLng(3.8008893, -76.64127119999999),
		radius: 200,
		types: ['address'],
	};

	return (
		<div>
			<PlacesAutocomplete
				value={address}
				onChange={setAddress}
				onSelect={handleSelect}
				searchOptions={searchOptions}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input {...getInputProps({ placeholder: 'Direccion' })} />
						<div>
							{loading ? <div>....is loading</div> : null}
							{suggestions.map(suggestion => {
								const className = suggestion.active
									? 'suggestion-item--active'
									: 'suggestion-item';
								// inline style for demonstration purpose
								const style = suggestion.active
									? { backgroundColor: '#fafafa', cursor: 'pointer' }
									: { backgroundColor: '#ffffff', cursor: 'pointer' };
								return (
									<div
										key={suggestion.index}
										{...getSuggestionItemProps(suggestion, {
											className,
											style,
										})}
									>
										{suggestion.description}
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</div>
	);
};
