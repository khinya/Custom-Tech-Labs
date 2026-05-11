export default function SetsUsApart() {
    return (
        <>
            <section className="container-fluid p-0 overflow-hidden">
                <div 
                    className="container my-5 py-5 text-center d-flex flex-column align-items-center gap-4"
                    style={{ backgroundColor: '#f5f5f5', borderRadius: '1rem' }}
                >
                    {/* Header Badge */}
                    <h1 
                        className="fs-4 fw-bold bg-dark text-white py-3 px-5 d-inline-block" 
                        style={{ borderRadius: '1rem' }}
                    >
                        What Sets Us Apart
                    </h1>

                    {/* Main Slogan */}
                    <h3 className="fs-5 fw-semibold">
                        Most tech companies build what is asked. <br /> 
                        We build what is <span style={{ backgroundColor: '#eef430', padding: '0 4px' }}>needed.</span>
                    </h3>

                    {/* Description */}
                    <h4 className="fs-6 fw-normal fst-italic lh-lg">
                        We start by understanding why something is being built and who it is for. By blending engineering with empathy, <br className="d-none d-md-block" /> 
                        we design solutions that align with real user behavior, operational realities, and long-term business goals along with technical <br className="d-none d-md-block" /> 
                        requirements.
                        <br /><br />
                        We bridge the gap between <b>strategy and execution,</b> ensuring every product is as practical as it is powerful.
                    </h4>

                    {/* Feature Bar */}
                    <div 
                        className="row w-100 w-md-75 py-3 text-white align-items-center g-0" 
                        style={{ backgroundColor: '#979797', borderRadius: '1rem' }}
                    >
                        <div className="col-4 border-end border-white">
                            <h6 style={{ color: '#eff430' }} className="fw-bold mb-1">EMPATHY</h6>
                            <p className="mb-0 small">User</p>
                            <p className="mb-0 small">Behavior First</p>
                        </div>
                        
                        <div className="col-4">
                            <h6 style={{ color: '#eff430' }} className="fw-bold mb-1">ENGINEERING</h6>
                            <p className="mb-0 small">Enterprise-Grade</p>
                            <p className="mb-0 small">System</p>
                        </div>
                        
                        <div className="col-4 border-start border-white">
                            <h6 style={{ color: '#eff430' }} className="fw-bold mb-1">OUTCOMES</h6>
                            <p className="mb-0 small">Real Business</p>
                            <p className="mb-0 small">Impact</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}