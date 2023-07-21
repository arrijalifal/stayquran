import { Poppins } from "next/font/google";

const regular = Poppins({ subsets: ['latin'], weight: ['400'] });
const medium = Poppins({ subsets: ['latin'], weight: ['500'] });
const font = {
    regular: regular.className,
    medium: medium.className
}

export default font