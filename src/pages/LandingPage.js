import React from 'react'
import PersonalFinance from "../assets/personal_finance.svg"

const LandingPage = () => {
    return (
        <div>
            <Fragment>
                <div>
                    <Navbar />
                </div>
                <div className="row">
                    <div className="col-6">
                        <h2>
                            TrackB lets you track and analyze your money.
                        </h2>
                        <p>Track and analyze your income and expenditure with TrackB, save more and grow.</p>
                    </div>
                    <div className="col-6">
                        <img src={PersonalFinance} />
                    </div>
                </div>
            </Fragment>
        </div>
    )
}

export default LandingPage
