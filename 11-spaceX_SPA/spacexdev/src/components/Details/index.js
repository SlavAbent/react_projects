import React, {useState, useEffect} from 'react';
import Main from '../Main';
import useLaunches from '../UseLaunches';
import Youtube from 'react-youtube'
import {useHistory} from 'react-router-dom'
import './details.css'


const Details = (props) => {
	const [launch, setLaunch] = useState(null)
	const { getLaunch } = useLaunches();
	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id))
	}, [getLaunch])
	const history = useHistory();
	if(!launch) return null
	return (
		<>
			<Main name={launch.name}/>
			<main className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={launch.links.patch.small} alt={launch.name}/>
						</div>
						<div className="details-content">
							<p className="details-description">{launch?.details}</p>
						</div>
					</div>
					<div>
						<Youtube className="details-youtube" videoId={launch.links.youtube_id}/>
					</div>
				</div>
				<a onClick={history.goBack} href="calendar.html" className="button button-back">go back</a>
			</main>
		</>
	)
}

export default Details