import React from 'react'

function InfoContact() {
    return (
        <div className="flex items-between mb-12 mt-8">
            <div className="min-w-[50%] flex">
                <p className="ml-0 mr-2">Already have an Account here?</p>
                <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">Sign In</div>
            </div>
            <div className="min-w-[50%] flex mx-20">
                <p className="ml-0 mr-2">Need any help?</p>
                <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">Contact Us</div>
            </div>
        </div>
    )
}

export default InfoContact