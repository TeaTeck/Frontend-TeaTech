'use client'

import { RegisterAssistido } from '@/api/register'
import Image from 'next/image'
import * as LR from '@uploadcare/blocks';
import React, { useEffect, useRef, useState } from 'react';

LR.registerBlocks(LR);

export default function Assistido() {
    const [files, setFiles] = useState([]);
    const ctxProviderRef = useRef(null);

    useEffect(() => {
        const ctxProvider = ctxProviderRef.current;
        if (!ctxProvider) return;
    
        const handleChangeEvent = (event) => {
          setFiles([...event.detail.allEntries.filter((file) => file.status === 'success')]);
        };
    
        ctxProvider.addEventListener('change', handleChangeEvent);
    
        return () => {
          ctxProvider.removeEventListener('change', handleChangeEvent);
        };
      }, [setFiles]);

      function log() {
        files.map((file) => (
            console.log(file.cdnUrl)
        ))
      }

    return (
        <main className=" mt-5 md:ml-12 self-center justify-self-center w-[95%]">
            <lr-config
                ctx-name="my-uploader"
                pubkey="a2166f02a764165d9357"
                maxLocalFileSizeBytes={10000000}
                multiple={false}
                imgOnly={true}
                sourceList="local, camera"
                useCloudImageEditor={false}
            ></lr-config>
            <lr-file-uploader-regular
                css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
                ctx-name="my-uploader"
                class="my-config"
            ></lr-file-uploader-regular>
            <lr-upload-ctx-provider
                ctx-name="my-uploader"
                ref={ctxProviderRef}
            />
        </main>
    )
}