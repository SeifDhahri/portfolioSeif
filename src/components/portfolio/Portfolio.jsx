// import React from 'react';
// import cityGuide from '../../img/portfolio/city-guide-app.png';
// import netflix from '../../img/portfolio/netflix.png';

// import taskManager from '../../img/portfolio/task-manager.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
// import 'react-popupbox/dist/react-popupbox.css';

// export default function Portfolio() {
// 	//**************** Netflix ****************//
// 	const openPopupboxNetflix = () => {
// 		const content = (
// 			<>
// 				<img
// 					className='portfolio-image-popupbox'
// 					src={netflix}
// 					alt='Netflix Clone Project'
// 				/>
// 				<p>
// 					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
// 					cumque illo est expedita quos adipisci suscipit unde itaque qui
// 					perferendis.
// 				</p>
// 				<b>GitHub:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open('https://github.com/felhiirad?tab=repositories')
// 					}
// 				>
// 					https://github.com/felhiirad?tab=repositories
// 				</a>
// 			</>
// 		);
// 		PopupboxManager.open({ content });
// 		PopupboxManager.update({
// 			content,
// 			config: {
// 				titleBar: {
// 					text: 'Netflix Clone Project'
// 				}
// 			}
// 		});
// 	};

// 	const popupboxConfigNetflix = {
// 		titleBar: {
// 			enable: true,
// 			text: 'Netflix Clone Project',
// 		},
// 		fadeIn: true,
// 		fadeInSpeed: 500,
// 	};

// 	//**************** City Guide App ****************//
// 	const openPopupboxCityGuide = () => {
// 		const content = (
// 			<>
// 				<img
// 					className='portfolio-image-popupbox'
// 					src={cityGuide}
// 					alt='City Guide App Project'
// 				/>
// 				<p>
// 					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
// 					cumque illo est expedita quos adipisci suscipit unde
// 				</p>
// 				<b>Demo:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open(
// 							'https://github.com/felhiirad?tab=repositories',
// 							'_blank'
// 						)
// 					}
// 				>
// 					https://github.com/felhiirad?tab=repositories
// 				</a>
// 				<br />
// 				<b>GitHub:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open(
// 							'https://github.com/felhiirad?tab=repositories',
// 							'_blank'
// 						)
// 					}
// 				>
// 					https://github.com/felhiirad?tab=repositories
// 				</a>
// 			</>
// 		);
// 		PopupboxManager.open({ content });
// 		PopupboxManager.update({
// 			content,
// 			config: {
// 				titleBar: {
// 					text: 'City Guide App Project',
// 				},
// 			},
// 		});
// 	};

// 	const popupboxConfigCityGuide = {
// 		titleBar: {
// 			enable: true,
// 			text: 'City Guide App Project',
// 		},
// 		fadeIn: true,
// 		fadeInSpeed: 500,
// 	};

// 	//**************** Portfolio Project ****************//
// 	/* const openPopupboxPortfolio = () => {
// 		const content = (
// 			<>
// 				<img
// 					className='portfolio-image-popupbox'
// 					src={portfolio}
// 					alt='Portfolio Project'
// 				/>
// 				<p>
					
// 				</p>
// 				<b>Demo:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open(
// 							'https://github.com/felhiirad?tab=repositories',
// 							'_blank'
// 						)
// 					}
// 				>
// 					https://github.com/felhiirad?tab=repositories
// 				</a>
// 				<br />
// 				<b>GitHub:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open(
// 							'https://github.com/felhiirad?tab=repositories',
// 							'_blank'
// 						)
// 					}
// 				>
// 					https://github.com/felhiirad?tab=repositories
// 				</a>
// 			</>
// 		);
// 		PopupboxManager.open({ content });
// 		PopupboxManager.update({
// 			content,
// 			config: {
// 				titleBar: {
// 					text: 'Portfolio Project with Material UI Library',
// 				},
// 			},
// 		});
// 	};

// 	const popupboxConfigPortfolio = {
// 		titleBar: {
// 			enable: true,
// 			text: 'Portfolio Project with Material UI Library',
// 		},
// 		fadeIn: true,
// 		fadeInSpeed: 500,
// 	};*/

// 	//**************** Task Manager ****************//
// 	const openPopupboxTaskManager = () => {
// 		const content = (
// 			<>
// 				<img
// 					className='portfolio-image-popupbox'
// 					src={taskManager}
// 					alt='Task Manager React and Redux Project'
// 				/>
// 				<p>
// 					nice app of task manager i use redux and react redux
// 				</p>
// 				<b>Demo:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open(
// 							'https://github.com/felhiirad?tab=repositories',
// 							'_blank'
// 						)
// 					}
// 				>
// 					https://react-redux-task-manager.herokuapp.com/
// 				</a>
// 				<br />
// 				<b>GitHub:</b>{' '}
// 				<a
// 					className='hyper-link'
// 					onClick={() =>
// 						window.open(
// 							'https://github.com/8020Coding/task-manager',
// 							'_blank'
// 						)
// 					}
// 				>
// 					https://github.com/felhiirad?tab=repositories
// 				</a>
// 			</>
// 		);
// 		PopupboxManager.open({ content });
// 		PopupboxManager.update({
// 			content,
// 			config: {
// 				titleBar: {
// 					text: 'Task Manager with React and Redux',
// 				},
// 			},
// 		});
// 	};

// 	const popupboxConfigTaskManager = {
// 		titleBar: {
// 			enable: true,
// 			text: 'Task Manager with React and Redux',
// 		},
// 		fadeIn: true,
// 		fadeInSpeed: 500,
// 	};

// 	return (
// 		<div id='portfolio' className='portfolio-wrapper'>
// 			<div className='container'>
// 				<h1 className='text-uppercase text-center py-5'>portfolio</h1>
// 				<div className='image-box-wrapper row justify-content-center'>
// 					<div
// 						className='portfolio-image-box'
// 						onClick={openPopupboxNetflix}
// 					>
// 						<img
// 							className='portfolio-image'
// 							src={netflix}
// 							alt='Netflix Clone Project'
// 						/>
// 						<div className='overflow'></div>
// 						<FontAwesomeIcon
// 							className='portfolio-icon'
// 							icon={faSearchPlus}
// 						/>
// 					</div>

// 					{/* - */}

// 					<div
// 						className='portfolio-image-box'
// 						onClick={openPopupboxCityGuide}
// 					>
// 						<img
// 							className='portfolio-image'
// 							src={cityGuide}
// 							alt='City Guide Project'
// 						/>
// 						<div className='overflow'></div>
// 						<FontAwesomeIcon
// 							className='portfolio-icon'
// 							icon={faSearchPlus}
// 						/>
// 					</div>

// 					{/* - */}

					

// 					{/* - */}

// 					<div
// 						className='portfolio-image-box'
// 						onClick={openPopupboxTaskManager}
// 					>
// 						<img
// 							className='portfolio-image'
// 							src={taskManager}
// 							alt='React and Redux Project'
// 						/>
// 						<div className='overflow'></div>
// 						<FontAwesomeIcon
// 							className='portfolio-icon'
// 							icon={faSearchPlus}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<PopupboxContainer {...popupboxConfigNetflix} />
// 			<PopupboxContainer {...popupboxConfigCityGuide} />
			
// 			<PopupboxContainer {...popupboxConfigTaskManager} />
// 		</div>
// 	);
// }
import React, { useState, useEffect } from 'react';
import cityGuide from '../../img/portfolio/city-guide-app.png';
import netflix from '../../img/portfolio/netflix.png';
import taskManager from '../../img/portfolio/task-manager.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './Portfolio.css'; // Import your CSS file for styling if needed

export default function Portfolio() {
    // State to hold the height of the clicked image
    const [popupHeight, setPopupHeight] = useState(null);

    // Function to open popup box for Netflix
    const openPopupboxNetflix = () => {
        const content = (
            <div style={{ height: popupHeight }}>
                <img
                    className='portfolio-image-popupbox'
                    src={netflix}
                    alt='Netflix Clone Project'
                />
                <p>
                I chose the day of Ashura for the Shiites. And after moving from the general to the specific, I obtained the keywords of ritual, and after that, I obtained the concept that I will apply in the products. Through the rituals that Shiites practice during the ceremony of Ashura, which involves fighting with chains, swords, and daggers (التطبير), and striking their faces and bodies with mud, leaving scars.

From there, I obtained the concept of "VIOLENT MATERIAL".

The concept is a solid that consists of a metal chain that leaves a remarkable trace on the human body upon impact.
                </p>
                <b>More details:</b>{' '}
                <a
                    className='hyper-link'
                    onClick={() =>
                        window.open('https://imgur.com/a/drWLFBm')
                    }
                >
                   https://imgur.com/a/drWLFBm
                </a>
            </div>
        );
        PopupboxManager.open({ content });
    };

    // Function to open popup box for City Guide App   popupHeight
    const openPopupboxCityGuide = () => {
        const content = (
            <div style={{ height:popupHeight   }}>
                <div >
                <img
                    className='portfolio-image-popupbox'
                    src={cityGuide}
                    alt='City Guide App Project'
                    style={{height:300}}
                />
                </div>
              
                <p st>
                I chose chess and used it in fashion supplements as it can be an innovative and appealing idea, especially for people who appreciate mental games and culture. Chess, with its form and symbols, can be added to creations in an artistic manner, such as printing chess patterns on faux leather, using chess pieces as decorations for bags or shoes, or even creating jewelry that mimics the shape of chess pieces. This can add a unique and clever touch to clothing and accessories, appealing to both game enthusiasts and fashion lovers.
                </p>
                <b>Demo:</b>{' '}
                <a
                    className='hyper-link'
                    onClick={() =>
                        window.open(
                            'https://imgur.com/a/c2TNZmT',
                            '_blank'
                        )
                    }
                >
                    https://imgur.com/a/c2TNZmT
                </a>
                <br />
                {/* <b>GitHub:</b>{' '}
                <a
                    className='hyper-link'
                    onClick={() =>
                        window.open(
                            'https://imgur.com/a/c2TNZmT',
                            '_blank'
                        )
                    }
                >
                    https://imgur.com/a/c2TNZmT
                </a> */}
            </div>
        );
        PopupboxManager.open({ content });
    };

    // Function to open popup box for Task Manager
    const openPopupboxTaskManager = () => {
        const content = (
            <div style={{ height: popupHeight }}>
                <img
                    className='portfolio-image-popupbox'
                    src={taskManager}
                    alt='Task Manager React and Redux Project'
                />
                <p>
                Hip-hop is a popular culture and way of life born in the streets, expressing freedom, rebellion, and creativity.

                Denim is used in fashion accessories due to its durability, comfort, and ability to withstand heavy use. Sneakers are often paired with denim to be part of the hip-hop look, in addition to reflecting the youthful and modern style adopted by most enthusiasts of this culture. Bright and bold colors are used to express personality and mood, as well as to stand out and influence others. Furthermore, colors can symbolize belonging to certain groups or regions. In general, the colors in hip-hop clothing reflect the spirit of the culture that encourages creativity and uniqueness.
                </p>
                <b>Demo:</b>{' '}
                <a
                    className='hyper-link'
                    onClick={() =>
                        window.open(
                            'https://imgur.com/a/yFsrk0p',
                            '_blank'
                        )
                    }
                >
                   https://imgur.com/a/yFsrk0p
                </a>
                <br />
                <b>imgur:</b>{' '}
                <a
                    className='hyper-link'
                    onClick={() =>
                        window.open(
                            'https://github.com/8020Coding/task-manager',
                            '_blank'
                        )
                    }
                >
                    https://github.com/felhiirad?tab=repositories
                </a>
            </div>
        );
        PopupboxManager.open({ content });
    };

    useEffect(() => {
        // Function to calculate the height of the clicked image
        const calculatePopupHeight = () => {
            const imageHeight = document.querySelector('.portfolio-image-popupbox').clientHeight;
            setPopupHeight(`${imageHeight}px`);
        };

        // Add event listeners to recalculate popup height when window is resized
        window.addEventListener('resize', calculatePopupHeight);

        return () => {
            window.removeEventListener('resize', calculatePopupHeight);
        };
    }, []);

    return (
        <div id='portfolio' className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                    {/* Netflix Card */}
                    <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
                        <img className='portfolio-image' src={netflix} alt='Netflix Clone Project' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>

                    {/* City Guide App Card */}
                    <div className='portfolio-image-box' onClick={openPopupboxCityGuide}>
                        <img className='portfolio-image' src={cityGuide} alt='City Guide App Project' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>

                    {/* Task Manager Card */}
                    <div className='portfolio-image-box' onClick={openPopupboxTaskManager}>
                        <img className='portfolio-image' src={taskManager} alt='Task Manager React and Redux Project' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            {/* Popup box containers */}
            <PopupboxContainer />
        </div>
    );
}
