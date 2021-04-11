import T from 'prop-types';
import classnames from 'classnames';

function Button({ className, ...props }) {
  return (
    <button
      className={classnames(
        'bg-blue-600 text-white text-base font-semibold px-6 py-2 rounded-lg',
        className
      )}
      {...props}
    />
  );
}

T.propTypes = {
  className: T.string,
};

export default Button;
