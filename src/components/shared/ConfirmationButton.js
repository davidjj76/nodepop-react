import React from 'react';
import T from 'prop-types';
import Button from './Button';

function ConfirmationButton({ confirmation, onConfirm, ...props }) {
  const [confirmationVisible, setConfirmationVisible] = React.useState(false);

  const showConfirmation = () => setConfirmationVisible(true);
  const hideConfirmation = () => setConfirmationVisible(false);

  const handleClick = showConfirmation;
  const handleConfirmClick = () => {
    hideConfirmation();
    onConfirm();
  };
  const handleCancelClick = hideConfirmation;

  return (
    <>
      <Button onClick={handleClick} {...props} />
      {confirmationVisible && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-gray-400 z-50 opacity-75 flex flex-col justify-center items-center">
          <div className="border-gray-600 border-solid border-1 rounded max-w-screen-md bg-white p-4">
            <p>{confirmation}</p>
            <div className="flex justify-end">
              <Button
                variant={Button.variants.secondary}
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
              <Button
                variant={Button.variants.warning}
                onClick={handleConfirmClick}
              >
                Ok
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ConfirmationButton.propTypes = {
  confirmation: T.node,
  onConfirm: T.func.isRequired,
};

ConfirmationButton.defaultProps = {
  confirmation: null,
};

export default ConfirmationButton;
