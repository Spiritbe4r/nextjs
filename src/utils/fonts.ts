import { Inter, Space_Grotesk } from "next/font/google"

const inter_init = Inter({
    subsets: ['latin'], display: 'swap',
    variable: '--font-inter',
})
const space_grotesk_init = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space_grotesk',
})

export const inter = inter_init.variable;
export const space_grotesk = space_grotesk_init.variable;