import T from 'prop-types';

const inputClassName =
  'w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400';

const TYPES = {
  text: 'text',
  password: 'password',
  number: 'number',
};

function InputText({ className, type, label, ...props }) {
  return (
    <div className={className}>
      <label className="text-sm text-gray-600">{label}</label>
      <div>
        <input type={type} className={inputClassName} {...props} />
      </div>
    </div>
  );
}

InputText.types = TYPES;

InputText.propTypes = {
  className: T.string,
  type: T.oneOf(Object.values(TYPES)),
  label: T.string,
};

InputText.defaultProps = {
  type: TYPES.text,
};

export default InputText;
