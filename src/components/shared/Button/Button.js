import T from 'prop-types';
import classNames from 'classnames';

const SIZES = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
};

const VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  ligth: 'light',
  dark: 'dark',
};

const commonClassName =
  'rounded-sm font-medium border border-solid text-center focus:outline-none disabled:opacity-50 disabled:pointer-events-none';

const sizeClassName = {
  [SIZES.xs]: 'py-1 px-2',
  [SIZES.sm]: 'py-2 px-4',
  [SIZES.base]: 'py-3 px-6',
  [SIZES.lg]: 'py-3 px-8',
  [SIZES.xl]: 'py-3 px-12',
};

const variantClassName = {
  [VARIANTS.primary]:
    ' text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600',
  [VARIANTS.secondary]:
    'text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-white',
  [VARIANTS.danger]:
    'text-white bg-red-600 border-red-600 hover:bg-red-800 hover:border-red-800',
  [VARIANTS.warning]:
    'text-black bg-yellow-400 border-yellow-400 hover:bg-yellow-600 hover:border-yellow-600',
  [VARIANTS.info]:
    'text-white bg-indigo-300 border-indigo-300 hover:bg-indigo-500 hover:border-indigo-500',
  [VARIANTS.ligth]:
    'text-black bg-gray-200 border-gray-200 hover:bg-gray-400 hover:border-gray-400',
  [VARIANTS.dark]:
    'text-white bg-gray-900 border-gray-900 hover:bg-black hover:border-black',
};

function Button({ className, full, size, variant, ...props }) {
  return (
    <button
      className={classNames(
        commonClassName,
        `text-${size}`,
        sizeClassName[size],
        variantClassName[variant],
        {
          'w-full': full,
        },
        className
      )}
      {...props}
    />
  );
}

Button.sizes = SIZES;
Button.variants = VARIANTS;

Button.propTypes = {
  className: T.string,
  size: T.oneOf(Object.values(SIZES)),
  variant: T.oneOf(Object.values(VARIANTS)),
  full: T.bool,
};

Button.defaultProps = {
  size: SIZES.base,
  variant: VARIANTS.primary,
  full: false,
};

export default Button;
