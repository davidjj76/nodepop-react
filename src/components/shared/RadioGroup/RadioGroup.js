import T from 'prop-types';

import { Radio } from '../InputChecked';

function RadioGroup({ className, label, options, value, ...props }) {
  return (
    <div className={className}>
      <h5 className="text-sm font-bold">{label}</h5>
      {options.map(({ value: optionValue, label: optionLabel }) => (
        <Radio
          key={optionValue}
          value={optionValue}
          label={optionLabel}
          checked={value === optionValue}
          {...props}
        />
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  className: T.string,
  label: T.string,
  options: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      label: T.string.isRequired,
    })
  ).isRequired,
  value: T.string.isRequired,
};

export default RadioGroup;
