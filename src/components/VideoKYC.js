import React from 'react';

const VideoKYC = ({ date, bank, amount, tenure, interestRate }) => {
    return (

        <div className="kyc-card video-kyc bank-option">
            <h3>Video KYC</h3>
            <div className='contanier'>
                <div className="details">
                    <div className="detail-item">
                        <span>Scheduled on</span>
                        <span className="detail-title date">28</span>
                        <span className="detail-value date-month">Oct, 2023</span>
                    </div>
                </div>
                <div className="plan-details">
                    <h4>Utkarsh SF Bank FD Plan 2</h4>
                    <div className="details">
                        <div className="detail-item">
                            <span className="detail-title">Deposit Amt</span>
                            <span className="detail-value">Rs. 20,000</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-title">Tenure</span>
                            <span className="detail-value">2 Years</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-title">Interest Rate</span>
                            <span className="detail-value">9.10%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="complete-button">Complete Now</button>
                <button className="reschedule-button">Reschedule</button>
            </div>
        </div>

    );
};

export default VideoKYC;
