import T from 'prop-types';

import { Radio } from '../InputChecked';

function RadioGroup({ className, label, options, value, ...props }) {
  return (
    <div className={className}>
      <h5 className="text-sm font-bold">{label}</h5>
      {Object.entries(options).map(([key, label]) => {
        const checked = value === key;
        return (
          <Radio
            key={key}
            value={key}
            label={label}
            checked={checked}
            {...props}
          />
        );
      })}
    </div>
  );
}

RadioGroup.propTypes = {
  className: T.string,
  label: T.string,
  options: T.object.isRequired,
  value: T.string.isRequired,
};

export default RadioGroup;
