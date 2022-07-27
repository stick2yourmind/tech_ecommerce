import React from 'react'
import backwardStep from './backward-step.svg'
import SliderStyle from './SliderStyle'

interface SliderProps {
  back: boolean;
  next: boolean;
  backHandler: (arg: void) => void;
  nextHandler: (arg: void) => void;
  title?: string;
  children: React.ReactNode;
}

const Slider:React.FC<SliderProps> =
  ({ back, next, backHandler, nextHandler, children, title }) => {
    return (
      <SliderStyle>
        <h3 id='slider-title'>{title}</h3>
        {back &&
          <img className='slider-step' id='slider-step-backward' src={backwardStep}
            alt="backward" onClick={() => backHandler()}
          />}
        {children}
        {next &&
          <img className='slider-step' id='slider-step-forward' src={backwardStep}
            alt="forward" onClick={() => nextHandler()}
          />}
      </SliderStyle>
    )
  }

export default Slider
