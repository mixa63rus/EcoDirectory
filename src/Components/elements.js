export const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  
export const customMainStyles = {
  option: (base, { isDisabled, isSelected }) => ({
    ...base,
    backgroundColor: isDisabled ? null
      : isSelected ? "#DCDCDC" : null,
    color: isDisabled ? '#ccc'
      : isSelected ? "blue"
      : "black",
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  menu: (styles) => ({ ...styles}),
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...base, opacity, transition };
  }
}

export const customSecondStyles = {
  option: (base, { isDisabled, isSelected }) => ({
    ...base,
    padding: 10,
    width: "300px",
    backgroundColor: isDisabled ? null
      : isSelected ? "#DCDCDC" : null,
    color: isDisabled ? '#ccc'
      : isSelected ? "blue"
      : "black",
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  menu: (styles) => ({ ...styles, width: "300px", fontSize: "10px", marginLeft: 30}),
  control: styles => ({ ...styles, backgroundColor: 'white', width: "300px", margin: 30 }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...base, opacity, transition };
  }
}
