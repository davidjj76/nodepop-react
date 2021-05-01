import T from 'prop-types';
import classnames from 'classnames';

const commonClassName =
  'appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer';

function Checkbox({ className, checked, label, ...props }) {
  return (
    <div className="my-6">
      <div className="w-full flex items-center">
        <input
          type="checkbox"
          className={classnames(
            commonClassName,
            {
              'bg-blue-400': checked,
            },
            className
          )}
          checked={checked}
          {...props}
        />
        <label className="ml-2 text-sm capitalize">{label}</label>
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  className: T.string,
  checked: T.bool,
  label: T.string,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
