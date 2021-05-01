import T from 'prop-types';

import { Checkbox } from '../InputChecked';

function CheckboxGroup({
  className,
  label,
  options,
  value,
  onChange,
  ...props
}) {
  const handleChange = ev => {
    const { checked, name, value: optionValue } = ev.target;
    onChange({
      target: {
        name,
        value: checked
          ? [...value, optionValue]
          : value.filter(v => v !== optionValue),
      },
    });
  };

  return (
    <div className={className}>
      <h5 className="text-sm font-bold">{label}</h5>
      {options.map(({ value: optionValue, label: optionLabel }) => (
        <Checkbox
          key={optionValue}
          value={optionValue}
          label={optionLabel}
          checked={value.includes(optionValue)}
          onChange={handleChange}
          {...props}
        />
      ))}
    </div>
  );
}

CheckboxGroup.propTypes = {
  className: T.string,
  label: T.string,
  options: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      label: T.string.isRequired,
    })
  ).isRequired,
  value: T.arrayOf(T.string.isRequired).isRequired,
  onChange: T.func.isRequired,
};

export default CheckboxGroup;
