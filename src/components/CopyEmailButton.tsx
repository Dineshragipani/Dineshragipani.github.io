import { useState } from 'react'
import {AnimatePresence, motion} from "motion/react";


function CopyEmailButton() {
    const [copy , setCopy] = useState(false);
    const email = "dineshragipani143@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopy(true);

        setTimeout(() => { setCopy(false) }, 2000);
    }
  return (
    <motion.button onClick={copyToClipboard}
    whileHover={{y:5}}
    whileTap={{scale:1.05}}
    className='relative flex items-center bg-[black] justify-center px-4 py-2 text-sm rounded-full font-extralight  w-[200px] cursor-pointer'>
        <AnimatePresence mode='wait'>
            {copy?(<motion.p className='flex items-center justify-center gap-2' key="value1" 
            initial={{opacity:0,y:-8}} 
            animate={{opacity:1}} 
            exit={{opacity:0}}
            transition={{duration:0.1}}
            >
                <img src='assets/copy-done.svg' className='w-5' alt='copy icon'/>
                Email has copied
                </motion.p>
            ):(
        <motion.p key="value2" className='flex items-center justify-center gap-2'>
            <img src='assets/copy.svg' className='w-5' alt='copy icon'/>
            Copy email address
            </motion.p>
            )}
        </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton