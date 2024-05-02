'use client'

import { RegisterAssistido } from '@/api/register'
import Image from 'next/image'
import * as LR from '@uploadcare/blocks';
import User from "@/assets/person.svg";
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
    <main className=" mt-5 md:ml-14 flex justify-center items-center w-[95%]">
      <form className=' w-[90%]'>
        <h1 className=' text-xl font-bold ml-14 mb-6'>Cadastro do Assistido</h1>
        <div className=' w-full flex justify-center items-center mb-6'>
          <div className=' w-[98%] border'></div>
        </div>
        <section id='assistido'>
          <h2 className=' text-base font-bold ml-6 mb-4'>Informações do Assistido <span className=' text-red-600'>*</span></h2>
          <div className=' flex items-center justify-between'>
            <div className=' flex flex-col justify-between items-center w-80 h-36 ml-5 mr-5 rounded-md'>
              <Image
                src={User}
                width={70}
                height={70}
                className=' mt-6'
              />
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
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="nameAssisted" className=' text-sm font-semibold ml-1'>Nome do Assistido <span className=' text-red-600'>*</span></label>
              <input required placeholder='Digite Aqui' type="text" name="nameAssisted" id="nameAssisted" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full'>
              <label for="dateAssisted" className=' text-sm font-semibold ml-1'>Data de Nascimento <span className=' text-red-600'>*</span></label>
              <input required type='date' name="dateAssisted" id="dateAssisted" className="registerInput" />
            </div>
          </div>
          <div className=' flex items-center justify-between mt-5'>
            <div className=' flex flex-col w-full mr-5'>
              <label for="seletividade" className=' text-sm font-semibold ml-1'>Seletividade Alimentar <span className=' text-red-600'>*</span></label>
              <textarea required placeholder='Digite Aqui' rows="4" type="text" name="seletividade" id="seletividade" className="registerTextArea" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="aversoes" className=' text-sm font-semibold ml-1'>Aversões <span className=' text-red-600'>*</span></label>
              <textarea required placeholder='Digite Aqui' rows="4" type="text" name="aversoes" id="aversoes" className="registerTextArea" />
            </div>
            <div className=' flex flex-col w-full'>
              <label for="preferencias" className=' text-sm font-semibold ml-1'>Preferências <span className=' text-red-600'>*</span></label>
              <textarea required placeholder='Digite Aqui' rows="4" type='date' name="preferencias" id="preferencias" className="registerTextArea" />
            </div>
          </div>
          <div className=' flex flex-col w-full mt-5'>
            <label for="nameAssisted" className=' text-sm font-semibold ml-1'>Laudo Medico</label>
            <lr-file-uploader-minimal
              css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.38.1/web/lr-file-uploader-minimal.min.css"
              ctx-name="my-uploader"
              class="my-config"
            >
            </lr-file-uploader-minimal>
          </div>
        </section>
        <div className=' w-full flex justify-center items-center mt-6 mb-6'>
          <div className=' w-[98%] border'></div>
        </div>
        <section id='responsavel'>
          <h2 className=' text-base font-bold ml-6 mb-4'>Informações do Responsável <span className=' text-red-600'>*</span></h2>
          <div className=' flex items-center justify-between'>
            <div className=' flex flex-col w-full mr-5'>
              <label for="nameResponsavel" className=' text-sm font-semibold ml-1'>Nome do Responsável <span className=' text-red-600'>*</span></label>
              <input required placeholder='Digite Aqui' type="text" name="nameResponsavel" id="nameResponsavel" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="responsavelParentesco" className=' text-sm font-semibold ml-1'>Parentesco <span className=' text-red-600'>*</span></label>
              <input required placeholder='Exemplo: Pai, Mãe, Tia etc...' type="text" name="responsavelParentesco" id="responsavelParentesco" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="responsavelCpf" className=' text-sm font-semibold ml-1'>Cpf <span className=' text-red-600'>*</span></label>
              <input required placeholder='000.000.000-00' type="text" name="responsavelCpf" id="responsavelCpf" className="registerInput" />
            </div>
          </div>
          <div className=' flex items-center justify-between mt-5'>
            <div className=' flex flex-col w-full mr-5'>
              <label for="responsavelEmail" className=' text-sm font-semibold ml-1'>Email <span className=' text-red-600'>*</span></label>
              <input required placeholder='Exemplo@gmail.com' type="text" name="responsavelEmail" id="responsavelEmail" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="responsavelContato" className=' text-sm font-semibold ml-1'>Contato <span className=' text-red-600'>*</span></label>
              <input required placeholder='(81) 98888-8888' type="text" name="responsavelContato" id="responsavelContato" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="segundoContato" className=' text-sm font-semibold ml-1'>Segundo Contato</label>
              <input required placeholder='(81) 98888-8888' type="text" name="segundoContato" id="segundoContato" className="registerInput" />
            </div>
          </div>
        </section>
        <div className=' w-full flex justify-center items-center mt-6 mb-6'>
          <div className=' w-[98%] border'></div>
        </div>
        <section id='responsavel'>
          <h2 className=' text-base font-bold ml-6 mb-4'>Informações do Segundo Responsável</h2>
          <div className=' flex items-center justify-between'>
            <div className=' flex flex-col w-full mr-5'>
              <label for="nameSResponsavel" className=' text-sm font-semibold ml-1'>Nome do Segundo Responsável</label>
              <input required placeholder='Digite Aqui' type="text" name="nameSResponsavel" id="nameSResponsavel" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="sResponsavelParentesco" className=' text-sm font-semibold ml-1'>Parentesco</label>
              <input required placeholder='Exemplo: Pai, Mãe, Tia etc...' type="text" name="sResponsavelParentesco" id="sResponsavelParentesco" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label for="sResponsavelCpf" className=' text-sm font-semibold ml-1'>Cpf</label>
              <input required placeholder='000.000.000-00' type="text" name="sResponsavelCpf" id="sResponsavelCpf" className="registerInput" />
            </div>
          </div>
        </section>
        <div className=' w-full flex justify-center items-center mt-8 mb-8'>
          <div className=' w-[98%] border'></div>
        </div>
        <div className=' flex justify-center items-center w-full mt-5 mb-6'>
          <button type='submit' className=' flex justify-center items-center p-2 border w-[80%] rounded-lg bg-[#3182B0] text-white font-semibold shadow-md hover:shadow-none hover:bg-white hover:text-[#3182B0] transition-all duration-200'>
            SALVAR
          </button>
        </div>
      </form>
    </main>
  )
}