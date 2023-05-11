import React, { useState } from 'react'
import {CarouselItem} from "./CarouselItem"
export const Carousel=() => {
    const [activeIndex,setActiveIndex] = useState(0);
    const items = [
        {
            title:"None",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing Nam hendrerit nisl turpis, quis tempor urna tincidunt ut.",
            
            icon: require("./Media/p1.svg"),
        },

        {
            title:"None",
            description:"blah,blah,blah",
            icon: require("./Media/p2.svg"),
        },

        {
            title:"None",
            description:"blah,blah,blah",
            icon: require("./Media/p3.svg"),
        },
        

    ];
  return (
    <div className='carousel'>
        <div 
            className='inner'
            style={{transform: `translate:(-${activeIndex * 100})`}}
        >    
        {items.map((item)=>{
            return  <CarouselItem item={item}/>;
        })}
        
        </div>

        <div className = "carousel-buttons">
            <button className='button-arrow'>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className='indicators'>
                <button className='indicator-buttons'>
                    <span class="material-symbols-outlined">
                        radio_button_checked
                    </span>

                </button>

            </div>
            <button className='button-arrow'>
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>

        </div>
    </div>
  )
}

