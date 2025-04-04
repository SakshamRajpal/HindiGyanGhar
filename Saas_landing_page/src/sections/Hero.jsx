import React from 'react';
import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '../components/Button.jsx';

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36
     max-md:pt-36 max-md:pb-32">
        <Element name="hero">
            <div className="container">
                <div className="relative z-2 max-w-512 max-lg:max-w-388">
                    <div className="caption small-2 uppercase text-p3">
                        HINDI SEEKHO
                    </div>
                    <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2
                    max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        Begin Your Hindi Learning Journey Today
                    </h1>
                    <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                    नमस्ते! Welcome to HindiGyanGhar
                    <br />
                    <br /> 
                    Your Gateway to Speaking Hindi Fluently!
                    🌟 Learn Hindi. Speak Confidently. Connect Deeply.
                    <br />
                    <br />
                    Ever wanted to say “नमस्ते” like a native? Or impress your desi friends with 
                    some smooth Hindi one-liners?
                    <br />
                    You're at the right place, dost! 🎯
                    </p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                         <Button icon="/images/zap.svg">Try it now</Button>
                   </LinkScroll>
                   </div>
                   <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px]
                   pointer-events-none hero-img_res">
                       <img 
                        src="/images/hero1.png"
                        className="size-200 max-lg:h-auto"
                        alt="hero"
                       />
                   </div>
            </div>
        </Element>
    </section>
  );
};

export default Hero;
