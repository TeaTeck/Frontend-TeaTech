'use client'

import { RegisterAssistido } from '@/api/register'
import { NotLoggedRedirect } from '@/api/login'
import Image from 'next/image'
import User from "@/assets/person.svg";
import { uploadDirect } from '@uploadcare/upload-client'

export default function Assistido() {

  NotLoggedRedirect()
  async function registerEvent(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const token = localStorage.getItem('session')

    const fileData = [formData.get('photo'), formData.get('medicalRecord')];

    const uploadPromises = fileData.map(file => uploadDirect(file, {
        publicKey: 'a2166f02a764165d9357',
        store: 'auto',
    }));

    const results = await Promise.all(uploadPromises);
    formData.set('photo', results[0].cdnUrl)
    formData.set('medicalRecord', results[1].cdnUrl)

    const jsonObject = Object.fromEntries(formData);
    RegisterAssistido(jsonObject, token)
}

  return (
    <main className=" mt-5 md:ml-14 flex justify-center items-center w-[95%]">
      <form onSubmit={registerEvent} enctype="multipart/form-data" className=' w-[90%]'>
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
              <input required id='photo' name="photo" type="file" accept='.png,.jpg' className="file-input file-input-bordered file-input-xs" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="name" className=' text-sm font-semibold ml-1'>Nome do Assistido <span className=' text-red-600'>*</span></label>
              <input required placeholder='Digite Aqui' type="text" name="name" id="name" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full'>
              <label htmlFor="birthDate" className=' text-sm font-semibold ml-1'>Data de Nascimento <span className=' text-red-600'>*</span></label>
              <input required type='date' name="birthDate" id="birthDate" className="registerInput" />
            </div>
          </div>
          <div className=' flex items-center justify-between mt-5'>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="foodSelectivity" className=' text-sm font-semibold ml-1'>Seletividade Alimentar <span className=' text-red-600'>*</span></label>
              <textarea required placeholder='Digite Aqui' rows="4" type="text" name="foodSelectivity" id="foodSelectivity" className="registerTextArea" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="aversions" className=' text-sm font-semibold ml-1'>Aversões <span className=' text-red-600'>*</span></label>
              <textarea required placeholder='Digite Aqui' rows="4" type="text" name="aversions" id="aversions" className="registerTextArea" />
            </div>
            <div className=' flex flex-col w-full'>
              <label htmlFor="preferences" className=' text-sm font-semibold ml-1'>Preferências <span className=' text-red-600'>*</span></label>
              <textarea required placeholder='Digite Aqui' rows="4" type='date' name="preferences" id="preferences" className="registerTextArea" />
            </div>
          </div>
          <div className=' flex flex-col w-full mt-5'>
            <label className=' text-sm font-semibold ml-1'>Imagem do Assistido e Laudo Medico</label>
            <input required id='medicalRecord' name="medicalRecord" type="file" accept='.png,.jpg' className="file-input file-input-bordered w-full" />
          </div>
        </section>
        <div className=' w-full flex justify-center items-center mt-6 mb-6'>
          <div className=' w-[98%] border'></div>
        </div>
        <section id='responsavel'>
          <h2 className=' text-base font-bold ml-6 mb-4'>Informações do Responsável <span className=' text-red-600'>*</span></h2>
          <div className=' flex items-center justify-between'>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="nameResponsibleOne" className=' text-sm font-semibold ml-1'>Nome do Responsável <span className=' text-red-600'>*</span></label>
              <input required placeholder='Digite Aqui' type="text" name="nameResponsibleOne" id="nameResponsibleOne" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="responsibleKinshipOne" className=' text-sm font-semibold ml-1'>Parentesco <span className=' text-red-600'>*</span></label>
              <input required placeholder='Exemplo: Pai, Mãe, Tia etc...' type="text" name="responsibleKinshipOne" id="responsibleKinshipOne" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="responsibleCpfOne" className=' text-sm font-semibold ml-1'>Cpf <span className=' text-red-600'>*</span></label>
              <input required placeholder='000.000.000-00' type="text" name="responsibleCpfOne" id="responsibleCpfOne" className="registerInput" />
            </div>
          </div>
          <div className=' flex items-center justify-between mt-5'>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="email" className=' text-sm font-semibold ml-1'>Email <span className=' text-red-600'>*</span></label>
              <input required placeholder='Exemplo@gmail.com' type="text" name="email" id="email" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="contactOne" className=' text-sm font-semibold ml-1'>Contato <span className=' text-red-600'>*</span></label>
              <input required placeholder='(81) 98888-8888' type="text" name="contactOne" id="contactOne" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="contactTwo" className=' text-sm font-semibold ml-1'>Segundo Contato</label>
              <input placeholder='(81) 98888-8888' type="text" name="contactTwo" id="contactTwo" className="registerInput" />
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
              <label htmlFor="nameResponsibleTwo" className=' text-sm font-semibold ml-1'>Nome do Segundo Responsável</label>
              <input placeholder='Digite Aqui' type="text" name="nameResponsibleTwo" id="nameResponsibleTwo" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="responsibleKinshipTwo" className=' text-sm font-semibold ml-1'>Parentesco</label>
              <input placeholder='Exemplo: Pai, Mãe, Tia etc...' type="text" name="responsibleKinshipTwo" id="responsibleKinshipTwo" className="registerInput" />
            </div>
            <div className=' flex flex-col w-full mr-5'>
              <label htmlFor="responsibleCpfTwo" className=' text-sm font-semibold ml-1'>Cpf</label>
              <input placeholder='000.000.000-00' type="text" name="responsibleCpfTwo" id="responsibleCpfTwo" className="registerInput" />
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