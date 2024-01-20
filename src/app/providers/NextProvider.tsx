"use client";

import { NextUIProvider } from '@nextui-org/react';
import React from 'react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

const NextProvider = ({children}: { children: React.ReactNode }) => {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light" themes={['light' ,'dark']}>
            {children}
            </NextThemesProvider>

        </NextUIProvider>
    );
}

export default NextProvider


