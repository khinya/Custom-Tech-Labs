export default function WhatDesign() {
    const services = [
        {
            id: "01",
            name: "Strategy Meets Engineering",
            title: `Why Before How`,
            desc: `Every project begins with understanding the “why” before building the “how.”`,
        },
        {
            id: "02",
            name: "User-Friendly by Design",
            title: `Complex Made Simple`,
            desc: `We turn complex systems into simple, intuitive experiences for teams and customers alike.`,
        },
        {
            id: "03",
            name: "Global Strength, Local Insight",
            title: `100+ Engineers, U.S. Strategy`,
            desc: `Backed by 100+ engineers in India and a strategic leadership team in the U.S., we deliver world-class execution with market-smart strategy.`,
        },
    ];

    return (
        <section className="container py-5">
            {/* Header */}
            <div className="d-flex justify-content-center mb-5">
                <h1 className="fw-bold fs-2 py-2 px-md-5 text-center bg-black text-white rounded-1">
                    What We Do
                </h1>
            </div>

            {/* Cards Grid */}
            <div className="row g-5 justify-content-center pt-4">
                {services.map((item, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <div 
                            className="position-relative p-4 rounded-4 border-0 w-100" 
                            style={{ 
                                backgroundColor: '#d9d9d9', 
                                minHeight: '320px',
                                maxWidth: '350px' 
                            }}
                        >
                            {/* Floating ID Badge */}
                            <div 
                                className="position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm"
                                style={{ 
                                    backgroundColor: '#eef430', 
                                    width: '60px', 
                                    height: '60px', 
                                    top: '-30px', 
                                    left: '20px',
                                    fontSize: '1.25rem'
                                }}
                            >
                                {item.id}
                            </div>

                            {/* Card Content */}
                            <div className="pt-4 mt-2">
                                <h3 className="fs-6 fw-bold text-uppercase mb-3">{item.name}</h3>
                                <h2 className="fs-4 fw-normal mb-3">{item.title}</h2>
                                <p className="fs-6 fw-normal text-secondary mb-0">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}