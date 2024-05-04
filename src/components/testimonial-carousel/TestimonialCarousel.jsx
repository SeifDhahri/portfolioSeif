import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonial_1 from '../../img/testimonials/testimonial-1.jpg';
import testimonial_2 from '../../img/testimonials/testimonial-2.jpg';
import testimonial_3 from '../../img/testimonials/testimonial-3.jpg';
import testimonial_4 from '../../img/testimonials/testimonial-4.jpg';
import testimonial_5 from '../../img/testimonials/testimonial-5.jpg';

export default function TestimonialCarousel() {
   return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={3000}
		>
			<>
				<img src={testimonial_1} alt='Male Testimonial 1' />
				<div className='myCarousel'>
					<h3>Marwen Saidi</h3>
					<p>
					Saifeddine 's creativity knows no bounds. His meticulous attention to detail and innovative designs have brought my accessory collection to life. With his expertise, my brand has flourished, becoming a go-to choice for fashion-forward individuals worldwide.
					</p>
				</div>
			</>
			<>
				<img src={testimonial_2} alt='Female Testimonial 2' />
				<div className='myCarousel'>
					<h3>Amin SEKRI</h3>
					<p>
					Saifeddine is a true visionary in the world of accessory design. His ability to blend elegance with contemporary trends has set my brand apart in the fashion industry. Working with him has been a delight, and his contributions have been instrumental in shaping the success of my business.
					</p>
				</div>
			</>
			<>
				<img src={testimonial_3} alt='Male Testimonial 3' />
				<div className='myCarousel'>
					<h3>Yosri ghabri</h3>
					<p>
					Saifeddine's passion for design is evident in every piece he creates. His commitment to quality craftsmanship and understanding of market trends have helped me establish a strong presence in the fashion accessory market. I couldn't be happier with the results he has delivered for my brand.
					</p>
				</div>
			</>
			{/* <>
				<img src={testimonial_4} alt='Female Testimonial 4' />
				<div className='myCarousel'>
					<h3>Seifeddine dhahri</h3>
					<p>
					Working with Irad has been an absolute game-changer for my accessory line. His intuitive understanding of style and attention to detail have translated into stunning designs that resonate with my clientele. Thanks to Irad, my accessories have become a must-have for fashion enthusiasts everywhere.
					</p>
				</div>
			</> */}
			<>
				<img src={testimonial_5} alt='Male Testimonial 5' />
				<div className='myCarousel'>
					<h3>wissem rabaoui</h3>
					<p>
					Working with Seifeddine has been an absolute game-changer for my accessory line. His intuitive understanding of style and attention to detail have translated into stunning designs that resonate with my clientele. Thanks to Seifeddine, my accessories have become a must-have for fashion enthusiasts everywhere.
					



					</p>
				</div>
			</>
		</Carousel>
	);
};
