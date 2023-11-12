import { OWNER_NAME } from "@/lib/constants"

export const Credits=()=>{
    return (
        <footer className="text-md md:text-lg flex flex-col md:flex-row justify-center items-center bg-primary gap-2 font-bold text-tertiary py-4 hover:text-secondary">
        <span className=''>
        {`Copyright © ${new Date().getFullYear()} ${OWNER_NAME}.`}
      </span>
      <p>All Rights Reserved</p>
        </footer>
    )
}