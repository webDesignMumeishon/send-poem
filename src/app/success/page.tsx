'use client'
import React, { Suspense } from 'react'; // Import Suspense
import Success from '@/components/Success';

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Success />
        </Suspense>
    );
}