import React from 'react'

function Card(p) {

    
    return (
        <>
        <div className="row">
            <div className="col-md-4">
                <div className="crm-card">
                    <div
                        className="d-flex align-items-center justify-content-between p-3 bg-white"
                        style={{ maxWidth: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                    >


                        <div style={{ flex: 1, paddingRight: '15px' }}>
                            <h6 className="mb-0" style={{ fontWeight: '600', color: '#334155', fontSize: '16px', lineHeight: '1.4' }}>
                                Softpro Full Stack Academy, Gomtinagar, Lucknow
                            </h6>
                        </div>


                        <div className="d-flex align-items-center" style={{ gap: '15px' }}>


                            <div className="d-flex flex-column align-items-center text-center">
                                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Closed</span>
                                <strong style={{ fontSize: '18px', color: '#1e293b', lineHeight: '1.2' }}>0</strong>
                                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>(0%)</span>
                            </div>


                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#f1f5f9',
                                    fontWeight: '700',
                                    color: '#1e293b',
                                    fontSize: '16px'
                                }}
                            >
                                0%
                            </div>

                        </div>

                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h3>1</h3>
                            <p>Assigned</p>
                        </div>

                        <div className="stat">
                            <h3>0</h3>
                            <p>Follow-ups</p>
                        </div>
                    </div>


                    <div className="enquiries">
                        <h3>8</h3>
                        <p>Enquiries</p>
                    </div>



                    <div className="card-buttons">
                        <button className="open">Open Enquiries</button>
                        <button className="timeline">Timeline</button>
                    </div>
                    <p className='mt-3 empt'>No recent follows-ups</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="crm-card" style={{ overflow: 'y' }}>
                    <div
                        className="d-flex align-items-center justify-content-between p-3 bg-white"
                        style={{ maxWidth: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                    >


                        <div style={{ flex: 1, paddingRight: '15px' }}>
                            <h6 className="mb-0" style={{ fontWeight: '600', color: '#334155', fontSize: '16px', lineHeight: '1.4' }}>
                                Softpro House, Jankipuram, Lucknow
                            </h6>
                        </div>


                        <div className="d-flex align-items-center" style={{ gap: '15px' }}>


                            <div className="d-flex flex-column align-items-center text-center">
                                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Closed</span>
                                <strong style={{ fontSize: '18px', color: '#1e293b', lineHeight: '1.2' }}>0</strong>
                                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>(0%)</span>
                            </div>


                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#f1f5f9',
                                    fontWeight: '700',
                                    color: '#1e293b',
                                    fontSize: '16px'
                                }}
                            >
                                0%
                            </div>

                        </div>

                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h3>1</h3>
                            <p>Assigned</p>
                        </div>

                        <div className="stat">
                            <h3>0</h3>
                            <p>Follow-ups</p>
                        </div>
                    </div>


                    <div className="enquiries">
                        <h3>8</h3>
                        <p>Enquiries</p>
                    </div>



                    <div className="card-buttons">
                        <button className="open">Open Enquiries</button>
                        <button className="timeline">Timeline</button>
                    </div>
                    <p className='mt-3 empt'>No recent follows-ups</p>

                    <div style={{ borderTop: '1px solid #ddd', overflowY: 'auto', overflowX: 'hidden', maxHeight: '120px' }}>

                        <div className="d-flex justify-content-between align-items-start mt-3 pt-3 word">
                            <div className="trainer" style={{ flex: 1, minWidth: 0, paddingRight: '10px' }}>
                                <h5 style={{ fontWeight: '700' }}>Shubham Verma</h5>
                                <p style={{ fontSize: '14px', color: 'grey' }}>by Dhirendra Patel <span>• 31 Jan,02:01 <br />PM</span></p>
                                <p style={{ fontSize: '14px', color: 'grey' }} className='mb-5'>Test by Admin</p>
                            </div>
                            <div className="enq ">
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)', width: '30px' }}>Hot</p>
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)' }}>Enquiry</p>
                            </div>


                        </div>

                       <div className="d-flex word">
                            <div className="trainer" style={{ flex: 1, minWidth: 0, paddingRight: '10px' }}>
                                <h5 style={{ fontWeight: '700' }}>Shubham Verma</h5>
                                <p style={{ fontSize: '14px', color: 'grey',wordWrap: 'break-word' }}>by Dhirendra Patel <span>• 31 Jan,02:01 <br />PM</span></p>
                                <p style={{ fontSize: '14px', color: 'grey' }} className='mb-5'>Test by Admin</p>
                            </div>
                            <div className="enq ">
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)', width: '30px' }}>Hot</p>
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)' }}>Enquiry</p>
                            </div>


                        </div>
                    </div>

                </div>


            </div>



             <div className="col-md-4">
                <div className="crm-card" style={{ overflow: 'y' }}>
                    <div
                        className="d-flex align-items-center justify-content-between p-3 bg-white"
                        style={{ maxWidth: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                    >


                        <div style={{ flex: 1, paddingRight: '15px' }}>
                            <h6 className="mb-0" style={{ fontWeight: '600', color: '#334155', fontSize: '16px', lineHeight: '1.4' }}>
                                Softpro Noida Office
                            </h6>
                        </div>


                        <div className="d-flex align-items-center" style={{ gap: '15px' }}>


                            <div className="d-flex flex-column align-items-center text-center">
                                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Closed</span>
                                <strong style={{ fontSize: '18px', color: '#1e293b', lineHeight: '1.2' }}>2</strong>
                                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>(20%)</span>
                            </div>


                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#f1f5f9',
                                    fontWeight: '700',
                                    color: '#1e293b',
                                    fontSize: '16px'
                                }}
                            >
                                0%
                            </div>

                        </div>

                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h3>3</h3>
                            <p>Assigned</p>
                        </div>

                        <div className="stat">
                            <h3>3</h3>
                            <p>Follow-ups</p>
                        </div>
                    </div>


                    <div className="enquiries">
                        <h3>7</h3>
                        <p>Enquiries</p>
                    </div>



                    <div className="card-buttons">
                        <button className="open">Open Enquiries</button>
                        <button className="timeline">Timeline</button>
                    </div>
                    <p className='mt-3 empt'>No recent follows-ups</p>

                    <div style={{ borderTop: '1px solid #ddd', overflowY: 'auto', overflowX: 'hidden', maxHeight: '120px' }}>

                        <div className="d-flex justify-content-between align-items-start mt-3 pt-3 word">
                            <div className="trainer" style={{ flex: 1, minWidth: 0, paddingRight: '10px' }}>
                                <h5 style={{ fontWeight: '700' }}>Mayank Pal</h5>
                                <p style={{ fontSize: '14px', color: 'grey' }}>by Akshat Pathak <span>• 18 Feb,11:17 AM</span></p>
                                <p style={{ fontSize: '14px', color: 'grey' }} className='mb-5'>Reg on 18 Feb</p>
                            </div>
                            <div className="enq ">
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)', color:'green'}}>Registerd</p>
                             
                            </div>


                        </div>

                       <div className="d-flex word">
                            <div className="trainer" style={{ flex: 1, minWidth: 0, paddingRight: '10px' }}>
                                <h5 style={{ fontWeight: '700' }}>Mayank Pal</h5>
                                <p style={{ fontSize: '14px', color: 'grey' }}>by Akshat Pathak  <span>• 31 Jan,02:01 <br />PM</span></p>
                                <p style={{ fontSize: '14px', color: 'grey' }} className='mb-5'>Test by Admin <br />Group of 5</p>
            
                            </div>
                            <div className="enq ">
                                <p style={{ backgroundColor: 'rgb(110, 110, 132)', width: '30px' }}>Hot</p>
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)' }}>Enquiry</p>
                               
                            </div>


                        </div>
                    </div>

                </div>


            </div>


         <div className="col-md-4">
                <div className="crm-card" style={{ overflow: 'y' }}>
                    <div
                        className="d-flex align-items-center justify-content-between p-3 bg-white"
                        style={{ maxWidth: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                    >


                        <div style={{ flex: 1, paddingRight: '15px' }}>
                            <h6 className="mb-0" style={{ fontWeight: '600', color: '#334155', fontSize: '16px', lineHeight: '1.4' }}>
                                Softpro Noida Office
                            </h6>
                        </div>


                        <div className="d-flex align-items-center" style={{ gap: '15px' }}>


                            <div className="d-flex flex-column align-items-center text-center">
                                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Closed</span>
                                <strong style={{ fontSize: '18px', color: '#1e293b', lineHeight: '1.2' }}>2</strong>
                                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>(20%)</span>
                            </div>


                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#f1f5f9',
                                    fontWeight: '700',
                                    color: '#1e293b',
                                    fontSize: '16px'
                                }}
                            >
                                0%
                            </div>

                        </div>

                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h3>3</h3>
                            <p>Assigned</p>
                        </div>

                        <div className="stat">
                            <h3>3</h3>
                            <p>Follow-ups</p>
                        </div>
                    </div>


                    <div className="enquiries">
                        <h3>7</h3>
                        <p>Enquiries</p>
                    </div>



                    <div className="card-buttons">
                        <button className="open">Open Enquiries</button>
                        <button className="timeline">Timeline</button>
                    </div>
                    <p className='mt-3 empt'>No recent follows-ups</p>

                    <div style={{ borderTop: '1px solid #ddd', overflowY: 'auto', overflowX: 'hidden', maxHeight: '120px' }}>

                        <div className="d-flex justify-content-between align-items-start mt-3 pt-3 word">
                            <div className="trainer" style={{ flex: 1, minWidth: 0, paddingRight: '10px' }}>
                                <h5 style={{ fontWeight: '700' }}>Mayank Pal</h5>
                                <p style={{ fontSize: '14px', color: 'grey' }}>by Akshat Pathak <span>• 18 Feb,11:17 AM</span></p>
                                <p style={{ fontSize: '14px', color: 'grey' }} className=''>Reg on 18 Feb</p>
                            </div>
                            <div className="enq ">
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)', color:'green'}}>Registerd</p>
                             
                            </div>


                        </div>

                       <div className="d-flex word">
                            <div className="trainer" style={{ flex: 1, minWidth: 0, paddingRight: '10px' }}>
                                <h5 style={{ fontWeight: '700' }}>Mayank Pal</h5>
                                <p style={{ fontSize: '14px', color: 'grey' }}>by Akshat Pathak  <span>• 31 Jan,02:01 <br />PM</span></p>
                                <p style={{ fontSize: '14px', color: 'grey' }} className='mb-5'>Test by Admin <br />Group of 5</p>
            
                            </div>
                            <div className="enq ">
                                <p style={{ backgroundColor: 'rgb(110, 110, 132)', width: '30px' }}>Hot</p>
                                <p style={{ backgroundColor: 'rgb(102, 102, 152)' }}>Enquiry</p>
                               
                            </div>


                        </div>
                    </div>

                </div>


            </div>
        </div>
            





        </>
    )
}

export default Card
 
