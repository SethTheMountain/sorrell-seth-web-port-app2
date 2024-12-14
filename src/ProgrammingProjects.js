import React, { useState } from 'react';
import cc from './images/cc.png';
import web_calc from './images/web_calc.png';
import project_site2 from './images/project_site2.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProgrammingProjects = () => {
  const [isCurrencyConverterOpen, setCurrencyConverterOpen] = useState(false);
  const [isWebCalculatorOpen, setWebCalculatorOpen] = useState(false);
  const [isPortfolioWebsiteOpen, setPortfolioWebsiteOpen] = useState(false);

  return (
    <main>
      <section id="programming-projects">
        <h2 className="pp">Programming Projects</h2>
        
        <h3 className="cc_t" onClick={() => setCurrencyConverterOpen(!isCurrencyConverterOpen)}>
          Currency Converter {isCurrencyConverterOpen ? '▲' : '▼'}
        </h3>
        {isCurrencyConverterOpen && (
          <div className="cc_d">
            <LazyLoadImage src={cc} className="socialcc" alt="Currency Converter" effect="blur"/>
            <p>
              This currency converter will take a set amount of money
              in one country's currency, and exchange it for an amount
              in another country's currency. The user sets an amount
              in a text box, chooses both countries,
              and then clicks the get exchange rate button.
            </p>
          </div>
        )}

        <h3 className="web_calc_t" onClick={() => setWebCalculatorOpen(!isWebCalculatorOpen)}>
          Web Calculator {isWebCalculatorOpen ? '▲' : '▼'}
        </h3>
        {isWebCalculatorOpen && (
          <div className="wcalc_d">
            <LazyLoadImage src={web_calc} className="web_calc_pic" alt="Web Calculator" effect="blur"/>
            <p className="web_calc_desc">
              This web-based calculator will do basic math formulas
              including addition, subtraction, multiplication,
              and division. You can clear the data in the
              calculator and also use parentheses.
            </p>
          </div>
        )}

        <h3 className="port_t" onClick={() => setPortfolioWebsiteOpen(!isPortfolioWebsiteOpen)}>
          Portfolio Website {isPortfolioWebsiteOpen ? '▲' : '▼'}
        </h3>
        {isPortfolioWebsiteOpen && (
          <div className="port_d">
            <LazyLoadImage src={project_site2} className="port_img" alt="Portfolio Website" effect="blur"/>
            <p className="port_desc">
              This was a more basic website that Sorrell created to attempt
              a portfolio website. It talks about two particular projects
              he created, as well as displays his contact information. This website
              that you are on now is a better version of this project.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProgrammingProjects;