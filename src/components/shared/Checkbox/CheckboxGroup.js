import T from 'prop-types';
import classnames from 'classnames';

import Checkbox from './Checkbox';

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
    <div className="flex items-center justify-between cursor-pointer">
      <h5 className="text-sm font-bold">{label}</h5>
      {options.map(option => {
        const checked = value.includes(option);
        return (
          <Checkbox
            key={option}
            value={option}
            label={option}
            checked={checked}
            onChange={handleChange}
            {...props}
          />
        );
      })}
    </div>
  );
}

CheckboxGroup.propTypes = {
  className: T.string,
  label: T.string,
  options: T.arrayOf(T.string.isRequired).isRequired,
  value: T.arrayOf(T.string.isRequired).isRequired,
  onChange: T.func.isRequired,
};

export default CheckboxGroup;
