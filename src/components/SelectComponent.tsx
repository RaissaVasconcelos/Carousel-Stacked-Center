import { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import chroma from 'chroma-js';

interface OptionType {
  value: string;
  label: string;
  color?: string;
}

const animatedComponents = makeAnimated();

interface ColourStyles extends StylesConfig<OptionType, false> {}

const options = [
  { value: 'Alcoolismo', label: 'Alcoolismo' },
  { value: 'Ansiedade', label: 'Ansiedade' },
  { value: 'Depressão', label: 'Depressão' }
]

const colourStyles: ColourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isSelected }) => {
    const color = chroma(data.color || '#000000');
    return {
      ...styles,
      backgroundColor: 'white',
      ':hover': {
        backgroundColor: '#DEFFEF',
      },
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles) => ({
      ...styles,
      fontSize: 16,
      borderRadius: 6,
      backgroundColor: '#DEFFEF',
      color: '#0C311F',
      width: 104,
      height: 26,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    background: '#DEFFEF'
    // color: data.color,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      color: 'red',
    },
  }),
};

const SelectComponent = () => (
  <div className='flex flex-col gap-3'>
    <label className='text-xs font-semibold'>Patologias Selecionadas</label>
    <Select
      isMulti={true}
      components={animatedComponents}
      placeholder='Adicionar mais patologia'
      options={options}
      styles={colourStyles}
      closeMenuOnSelect={false}
      isClearable={false}
    />

  </div>
)

export default SelectComponent
