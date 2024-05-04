import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
	return (
		<div id='services' className='services'>
			<h1 className='services-title py-5'>my services</h1>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faDesktop}
									size='2x'
								/>
							</div>
							<h3 className='service--sub-title'>Design and development</h3>
							<p>
							creates new accessory concepts based on market trends and brand vision.
							</p>
						</div>
					</div>
					{/* - */}
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faFileCode}
									size='2x'
								/>
							</div>
							<h3 className='service--sub-title'>Material selection and supplier management</h3>
							<p>
							choose quality materials and manage relationships with suppliers for production
							</p>
						</div>
					</div>
					{/* - */}
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faFacebookF}
									size='2x'
								/>
							</div>
							<h3 className='service--sub-title'>Production management</h3>
							<p>
							manufacturing processes and ensures product quality.
							</p>
						</div>
					</div>
					{/* - */}
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faGoogle}
									size='2x'
								/>
							</div>

							<h3 className='service--sub-title'>Marketing and promotion</h3>
							<p>
							promote accessories through various channels like advertising and social media to increase brand visibility and sales.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
