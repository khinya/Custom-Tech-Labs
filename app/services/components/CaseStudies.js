'use client';
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
// 1. Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        image: "/servicesolimg/caseStudio.png",
        title: "Healthcare Operations",
        description: "We’ve built systems for healthcare operations, retail platforms...",
    },
    {
        image: "/servicesolimg/caseStudio.png", // Using same image for demo
        title: "Retail Ecosystems",
        description: "Helping retail brands scale their digital footprint...",
    },
    {
        image: "/servicesolimg/caseStudio.png",
        title: "Manufacturing Precision",
        description: "Replacing inefficient manual processes with automated visibility...",
    }
];

export default function CaseStudies() {
    return (
        <section className="container-fluid p-0 mb-5 pb-5 position-relative" style={{ backgroundColor: '#fff' }}>
            
            {/* Angled Black Header Background */}
            <div 
                className="bg-black text-white position-absolute top-0 w-100" 
                style={{ 
                    height: '240px', 
                    clipPath: 'polygon(0 0, 100% 0, 100% 60%, 45% 60%, 38% 100%, 0 100%)',
                    zIndex: 0
                }}
            >
                <div className="container h-75 d-flex align-items-center">
                    <h1 className="fw-bold ps-md-5 mb-5" style={{ fontSize: '2.5rem' }}>Case Studies</h1>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="container position-relative" style={{ paddingTop: '120px', zIndex: 1 }}>
                <div className="row justify-content-center align-items-center position-relative">
                    
                    {/* Custom Navigation Buttons */}
                    <button className="case-prev btn border-0 p-0 text-secondary opacity-50 position-absolute start-0 z-3 d-none d-lg-block" style={{ top: '35%' }}>
                        <BsChevronLeft size={40} />
                    </button>
                    <button className="case-next btn border-0 p-0 text-secondary opacity-50 position-absolute end-0 z-3 d-none d-lg-block" style={{ top: '35%' }}>
                        <BsChevronRight size={40} />
                    </button>

                    <div className="col-12 col-md-10 col-lg-8">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                prevEl: '.case-prev',
                                nextEl: '.case-next',
                            }}
                            pagination={{ 
                                clickable: true,
                                el: '.custom-pagination'
                            }}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    {/* Featured Image */}
                                    <div className="position-relative w-100 shadow-lg">
                                        <Image 
                                            className="w-100 h-auto d-block" 
                                            src={slide.image} 
                                            width={994} 
                                            height={388} 
                                            alt={slide.title} 
                                            priority
                                        />
                                    </div>

                                    {/* Content Box */}
                                    <div 
                                        className="p-4 p-md-5 d-flex flex-column gap-3 align-items-start"
                                        style={{ backgroundColor: '#d9d9d9' }}
                                    >
                                        <h2 className="fs-5 fw-bold fst-italic mb-0 text-dark">{slide.title}</h2>
                                        <p className="fw-normal mb-2 lh-base text-dark" style={{ fontSize: '15px' }}>
                                            {slide.description}
                                        </p>
                                        
                                        <Link 
                                            href="/" 
                                            className="btn fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 border-0 transition-scale"
                                            style={{ backgroundColor: '#EEF430', fontSize: '13px', borderRadius: '4px' }}
                                        >
                                            Read The Case Study <BsArrowRight />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Pagination Container */}
                        <div className="custom-pagination d-flex justify-content-center gap-2 mt-4"></div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background-color: #fff;
                    border: 1px solid #6c757d;
                    opacity: 1;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background-color: #bbb !important;
                }
                .transition-scale {
                    transition: transform 0.2s ease;
                }
                .transition-scale:hover {
                    transform: scale(1.03);
                }
            `}</style>
        </section>
    );
}