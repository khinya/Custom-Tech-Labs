'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6"; // To match icon in image_57659c.png
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi"; // Long-line arrows for image_568384.png

// Assuming buyData is an array of objects: { img: string, first: string, last: string }
import { buyData } from './buyOnlineData'; 

export default function BuyingOnline() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Displays 3 cards at a time as seen in image_56f45c.png

    const nextSlide = () => {
        if (currentIndex + itemsToShow < buyData.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="bg-white " style={{ fontFamily: "'Albert Sans', sans-serif" }}>
            
            {/* 1. Dark Header Strip - Exactly as image_56f45c.png */}
            <div className="bg-black text-white ">
                <div className="container" style={{ paddingLeft: '115px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '8px' }}>
                        For Your Customers
                    </h2>
                    <h1 style={{ fontSize: '32px', fontWeight: '600' }}>
                        Buying online should feel <span style={{ color: '#eef430', fontStyle: 'italic' }}>effortless</span>
                    </h1>
                </div>
            </div>

            {/* 2. Description Content - Using Figma Specs */}
            <div className="container " style={{ paddingLeft: '115px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', fontStyle: 'italic', marginBottom: '10px' }}>
                    Fast pages. Clear paths. No confusion at checkout.
                </h3>
                <p style={{ fontSize: '16px', fontWeight: '400', maxWidth: '842px', color: '#000', lineHeight: '1.4' }}>
                    Because when the experience feels hard, customers don’t stay— they leave. <br className="d-none d-md-block" />
                    We focus on ecommerce website design development that guides people naturally from browsing to buying.
                </p>
            </div>

            {/* 3. Slider Area - Functional Arrows matching image_568384.png */}
            <div className="container-fluid position-relative px-0 ">
                <div className="d-flex align-items-center justify-content-center gap-2">
                    
                    {/* Left Arrow - Red Border Box */}
                    <button 
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        style={{ 
                            width: '45px', height: '35px', 
                            border: '0px solid ', background: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            opacity: currentIndex === 0 ? 0.3 : 1,
                            cursor: currentIndex === 0 ? 'default' : 'pointer'
                        }}
                    >
                        <HiOutlineArrowNarrowLeft size={28} color="black" />
                    </button>

                    {/* Image Track - Exactly 3 items visible */}
                    <div className="d-flex gap-4 overflow-hidden" style={{ width: '1020px' }}>
                        {buyData.slice(currentIndex, currentIndex + itemsToShow).map((data, idx) => (
                            <div key={idx} style={{ width: '342px' }} className="flex-shrink-0">
                                
                                {/* Image with Yellow Border Frame */}
                                <div style={{ 
                                    border: '3px solid #EEF430', 
                                    padding: '2px', 
                                    borderRadius: '3px', 
                                    marginBottom: '12px',
                                    backgroundColor: '#EEF430' 
                                }}>
                                    <Image 
                                        src={data.img} 
                                        width={300} 
                                        height={150} 
                                        alt="Service Feature" 
                                        className="object-fit-cover" 
                                        style={{ height: '142px', width: '100%', borderRadius: '2px' }} 
                                    />
                                </div>

                                {/* Checkmark + Text matching image_57659c.png */}
                                <div className="d-flex align-items-start gap-2">
                                    <FaCheck 
                                        className="rounded-circle p-1" 
                                        style={{ backgroundColor: '#eef430', color: '#000', fontSize: '18px' }} 
                                    />
                                    <h4 style={{ fontSize: '15px', fontWeight: '500', color: '#000', margin: 0 }}>
                                        {data.first} {data.last}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow - Red Border Box */}
                    <button 
                        onClick={nextSlide}
                        disabled={currentIndex + itemsToShow >= buyData.length}
                        style={{ 
                            width: '45px', height: '35px', 
                            border: '0px solid ', background: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            opacity: currentIndex + itemsToShow >= buyData.length ? 0.3 : 1,
                            cursor: currentIndex + itemsToShow >= buyData.length ? 'default' : 'pointer'
                        }}
                    >
                        <HiOutlineArrowNarrowRight size={28} color="black" />
                    </button>
                </div>
            </div>

            {/* 4. Footer Section - Matching image_568384.png bottom CTAs */}
            <div className="container" style={{ paddingLeft: '115px' }}>
                <h2 className="fw-bold mb-1" style={{ fontSize: '16px' }}>The result?</h2>
                <p className="mb-4" style={{ fontSize: '16px' }}>
                    A store that feels easy to trust – and even easier to buy from
                </p>
                
                <div className="d-flex gap-3">
                    <Link 
                        href="/" 
                        className="btn fw-bold px-3 py-2 d-flex align-items-center gap-2" 
                        style={{ backgroundColor: '#EEF430', borderRadius: '4px', color: '#000', fontSize: '14px' }}
                    >
                        View Our Portfolio <HiOutlineArrowNarrowRight />
                    </Link>
                    <Link 
                        href="/solutionservice" 
                        className="btn fw-bold px-3 py-2 d-flex align-items-center gap-2" 
                        style={{ backgroundColor: '#EEF430', borderRadius: '4px', color: '#000', fontSize: '14px' }}
                    >
                        Work With Us <HiOutlineArrowNarrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}