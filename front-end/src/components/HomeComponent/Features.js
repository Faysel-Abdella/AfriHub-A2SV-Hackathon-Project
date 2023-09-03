import React from 'react'
import aiImg from '../../assets/images/ai.svg'
import curImg from '../../assets/images/money.svg'
import lanImg from '../../assets/images/language.svg'

const Features = () => {
  return (
    <div className='my-5 container'>
        <div className="container px-4 py-5" id="hanging-icons">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start">
                    <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src={aiImg} alt='Feature Icon' style={{width: "5rem"}}/>
                    </div>
                    <div>
                        <h2 className='text-success medium-italic'>AI Based Job Suggestion</h2>
                        <p className='paragraph'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="btn btn-primary">
                        Read more ..
                        </a>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src={curImg} alt='Feature Icon' style={{width: "5rem"}}/>
                    </div>
                    <div>
                    <h2 className='text-success medium-italic'>Support African's Local Currencies</h2>
                    <p className='paragraph'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="btn btn-primary">
                       Read more ..
                    </a>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src={lanImg} alt='Feature Icon' style={{width: "5rem"}}/>
                    </div>
                    <div>
                    <h2 className='text-success medium-italic'>Support African's Language</h2>
                    <p className='paragraph'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="btn btn-primary">
                       Read more ..
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features