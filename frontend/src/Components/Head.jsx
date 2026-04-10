import React from 'react'

function Head() {
  return (
   <>
   <div className="row py-4">
          <div className="col-md-12">
            <div
              className="d-flex justify-content-between align-items-center bg-white shadow p-3"
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ cursor: 'pointer', color: '#64748b' }}>
                <i className="fa-regular fa-bell"></i>
              </div>

              <div style={{ cursor: 'pointer' }}>
                <i className="fa-regular fa-user"></i>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Head
