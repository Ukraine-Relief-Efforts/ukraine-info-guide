import { Marker, Popup } from 'react-leaflet';

const MapMarker = ({ qr, gmaps, address, position }) => {
	if (!position)
		return null;

	return (
		<Marker position={position}>
			<Popup >
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}>
					<a target='_blank' href={gmaps} className="text-center">
						<p className="font-semibold">{address}</p>
						<img src={qr} alt={address}
							width='100' height='100' style={{ margin: "auto" }}
						/>
					</a>
				</div>
			</Popup>
		</Marker>
	);
}

export default MapMarker;
