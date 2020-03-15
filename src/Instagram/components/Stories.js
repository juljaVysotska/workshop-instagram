import React from 'react';
import storiesJSON from '../assets/data/stories.json';




export const Stories = () => {

    const divJSX = storiesJSON.map((stories) => {
        return (
            <div key ={stories.id} className="story">

				<div>
					<img src={stories.src}/>
				</div>

				<span>{stories.message}</span>
			</div>
        )
    });


    return (
        <div className="stories">

		{divJSX}
		</div>
    )
}