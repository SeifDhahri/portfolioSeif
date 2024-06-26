import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from 'react-share';

export default function Footer() {
   return (
		<div className='footer'>
			<div className='container'>
				<div className='row inner-wrapper'>
					<div className='col-lg-4 col-md-6 col-sm-6'>
						<div className='d-flex'>
							<p>2024 Seifeddine dhahri . #01</p>
						</div>
						<div className='d-flex'>
							<>Tunisie, Aouina Tunis</>
						</div>
						<div className='d-flex'>
							<a href='tel:+21699583326'>(+216)99583326</a>
						</div>
						<div className='d-flex'>
							<a href='mailto:Saifdhahri442@gmail.com'>
								Saifdhahri442@gmail.com
							</a>
						</div>
					</div>
					<div className='col-lg-3 col-md-2 col-sm-6'>
						<div className='row'>
							<div className='col'>
								<a className='footer-nav'>Home</a>
								<br />
								<a className='footer-nav'>About</a>
								<br />
								<a className='footer-nav'>Services</a>
							</div>
							<div className='col'>
								<a className='footer-nav'>Experience</a>
								<br />
								<a className='footer-nav'>Portfolio</a>
								<br />
								<a className='footer-nav'>Contacts</a>
							</div>
						</div>
					</div>

					<div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
						<div className='d-flex justify-content-center'>
							<FacebookShareButton
								url={'https://www.facebook.com/profile.php?id=100090954690166&mibextid=ZbWKwL'}
								quote={'Designer Accessory'}
								hashtag='#javascript'
							>
								<FacebookIcon className='mx-3' size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={'https://twitter.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<TwitterIcon className='mx-3' size={36} />
							</TwitterShareButton>
							<RedditShareButton
								url={'https://www.reddit.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<RedditIcon className='mx-3' size={36} />
							</RedditShareButton>
							<LinkedinShareButton
								url={'https://www.linkedin.com/in/dhahri-saif-7b08b3184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<LinkedinIcon className='mx-3' size={36} />
							</LinkedinShareButton>
						</div>
						<p className='pt-3 text-center'>
							Copyright&copy;
							{new Date().getFullYear()}&nbsp;Tunis
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
