export const SlectStyle = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      border: '1px solid #ddd !important',
      boxShadow: 'none !important',
      borderRadius: '10px',
      cursor: 'pointer !important',
      paddingLeft: '7px',
      minHeight: '48px',
      height: '100%',
    };
  },
  dropdownIndicator: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      paddingRight: '13px !important',
      opacity: '1 !important',
    };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? '#5cdb95 !important'
        : isFocused
        ? 'rgba(0,0,0,.04) !important'
        : null,
      padding: '16px',
      fontSize: '16px',
      cursor: 'pointer !important',
    };
  },
  menuList: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      padding: '0',
      borderRadius: '10px',
    };
  },
  menu: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      borderRadius: '10px',
    };
  },
};

export const Options = [
  {
    value: '1',
    label: `Дешевле`,
  },
  {
    value: '2',
    label: 'Дороже',
  },
  {
    value: '3',
    label: 'Старые',
  },
  {
    value: '4',
    label: 'Новые',
  },
];
