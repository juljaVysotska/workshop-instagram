import React from 'react';
import avatar from '../assets/images/nasa.jpg';
import images from '../assets/data/images.json';

import { Stories } from './Stories';


export const Content = () => {

    const imagesJSX = images.map((img) => {
        return (
            <img
				key = {img.id}
				src = {img.src} 
			/>
        )
    });


    return (
        <section className="content">
			<div className="profile">
				<img 
					className="avatar"
					src ={avatar}
				/>
				<div className="main">

					<span className="nickname">Nasa</span>
					<div className="stats">
						<div>
							<span>128</span>&nbsp; posts
						</div>
						<div>
							<span>23.4</span>m&nbsp; followers

						</div>
						<div>
							<span>98</span>&nbsp; following
						</div>
					</div>

					<p className="name">NASA
					Explore the universe and discover our home planet!</p>
				</div>

				<Stories />
				
			</div>

			<div className="images"> 
				{imagesJSX}
			</div>
			
		</section>
    )
}