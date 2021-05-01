import T from 'prop-types';
import classnames from 'classnames';

const inputClassName =
  'appearance-none w-6 h-6 border border-gray-300 outline-none cursor-pointer checked:bg-blue-400';

const TYPES = {
  checkbox: 'checkbox',
  radio: 'radio',
};

const typeClassName = {
  [TYPES.checkbox]: 'rounded-sm',
  [TYPES.radio]: 'rounded-full',
};

function InputChecked({ className, type, label, ...props }) {
  return (
    <div className={classnames('my-6', className)}>
      <div className="flex items-center">
        <input
          type={type}
          className={classnames(inputClassName, typeClassName[type], {})}
          {...props}
        />
        <label className="ml-2 text-sm">{label}</label>
      </div>
    </div>
  );
}

InputChecked.types = TYPES;

InputChecked.propTypes = {
  className: T.string,
  type: T.oneOf(Object.values(TYPES)),
  label: T.string,
};

InputChecked.defaultProps = {
  type: TYPES.checkbox,
};

export const Checkbox = props => (
  <InputChecked type={TYPES.checkbox} {...props} />
);
export const Radio = props => <InputChecked type={TYPES.radio} {...props} />;

export default InputChecked;
