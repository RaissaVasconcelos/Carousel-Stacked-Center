import { InputRadio } from './InputRadio'
import SelectComponent from './SelectComponent'

const Modal = () => {
  return (
    <div className="max-w-80 flex flex-col border p-4 font-Inter">
      <div className="bg-[#E7EDE7] bg-opacity-55 rounded border border-[#263A2D] border-opacity-10 p-4">
        <div className="w-full flex justify-between items-center pl-2">
          <span className="font-semibold text-lg">Alcoolismo</span>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.80322 5.30371L10.9129 10.4134" stroke="black" stroke-width="0.958058" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9129 5.30371L5.80322 10.4134" stroke="black" stroke-width="0.958058" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="pl-2">
          <span className="text-sm text-start text-[#475467]">
            Colocar uma descrição do porque a cannabis medicinal ajuda no tratamento do alcoolismo. Apenas 3 linhas
          </span>
        </div>
      </div>
      <div className="border-b border-[#E4E7EC] py-4"/>
      <form className="w-full flex flex-col justify-start gap-4">
        <input type="text" placeholder="Nome" className="border border-[#CCCCCC] rounded-md py-1 px-4"/>
        <input type="email" placeholder="Email" className="border border-[#CCCCCC] rounded-md py-1 px-4"/>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xs">Eu sou:</span>
          <fieldset className='flex gap-4'>
            <InputRadio id='patient' label='Paciente' name='userType' />
            <InputRadio id='representante' label='Representante legal' name='userType' />
          </fieldset>
        </div>
        <SelectComponent />
      </form>
    </div>
  )
}

export default Modal
