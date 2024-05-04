import React from 'react';
import author from '../../img/about/about-image.jpg';

export default function About() {
	return (
		<div id='about' className='container py-5'>
			<div className='row'>
				<div className='col-lg-6 col-xs-12'>
					<div className='photo-wrap mb-5'>
						<img
							className='profile-img'
							src={author}
							alt='Author photo'
						/>
					</div>
				</div>
				<div className='about-info col-lg-6 col-xs-12'>
					<h1 className='about-heading'>about me</h1>
               <p>
			   Hello! I am Seif Dhahri, an Accessory Designer. I specialize in creating unique and stylish accessories for various purposes. My design philosophy revolves around blending aesthetics with functionality, ensuring that each piece not only looks good but also serves its purpose effectively.

I utilize a range of techniques and materials to craft accessories that cater to different needs and preferences. Whether it's designing fashionable jewelry, practical bags, or innovative tech accessories, I strive to create items that stand out and enhance the user's experience.

Before embarking on any design project, I take the time to understand your requirements and preferences thoroughly. Through discussions and consultations, we'll explore your vision and ensure that the final product aligns with your brand identity and target audience.

Additionally, I stay updated on the latest trends and technologies in accessory design to deliver cutting-edge solutions. Whether it's incorporating sustainable materials or leveraging advanced production techniques, I'm committed to delivering designs that are both relevant and sustainable.

Once the design process is complete, I oversee the production phase, ensuring that each piece meets the highest quality standards. Whether it's sourcing materials, collaborating with manufacturers, or overseeing quality control, I handle every aspect of the production process with meticulous attention to detail.

Furthermore, I understand the importance of effective marketing and promotion in today's competitive market. Therefore, I can also assist you in creating a comprehensive marketing strategy to promote your accessories effectively. From social media campaigns to influencer collaborations, I'll help you reach your target audience and drive sales.

Overall, as an Accessory Designer, my goal is to create designs that not only look good but also resonate with your audience and make a lasting impression. Whether you're launching a new collection or revamping your brand, I'm here to bring your vision to life and help you succeed in the world of accessories.
               </p>
				</div>
			</div>
		</div>
	);
}
