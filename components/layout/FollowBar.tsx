import React from 'react'

type Props = {}

const FollowBar = (props: Props) => {
    return (
        <div className="hidden px-6 py-4 lg:block">
            <div className="p-4 bg-neutral-800 rounded-xl">
                <h2 className="text-xl font-semibold text-white">Who to follow</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {/* TODO: USER LISST */}
                </div>
            </div>
        </div>
    )
}

export default FollowBar