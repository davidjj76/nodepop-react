import React from 'react';
import T from 'prop-types';
import Button from '../Button';

function ConfirmationButton({ title, confirmation, onConfirm, ...props }) {
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
      <Button
        variant={Button.variants.secondary}
        onClick={handleClick}
        {...props}
      />
      {confirmationVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-blue-800 bg-opacity-75 origin-center flex justify-center items-center animate-fade-in">
          <div className="bg-white w-11/12 max-w-md text-center pt-10 rounded-sm shadow-lg animate-slide-down">
            <div className="px-4 mb-4">
              <h2 className="text-3xl font-medium">Wait!</h2>
              <p className="mt-2 w-10/12 max-w-full mx-auto text-gray-800 text-base">
                {confirmation}
              </p>
              <div className="flex mt-10 justify-center py-4 px-4 border-t border-gray-300">
                <Button
                  variant={Button.variants.secondary}
                  className="mx-4"
                  onClick={handleCancelClick}
                >
                  No
                </Button>
                <Button
                  variant={Button.variants.warning}
                  className="mx-4"
                  onClick={handleConfirmClick}
                >
                  Yes!
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ConfirmationButton.propTypes = {
  confirmation: T.string,
  onConfirm: T.func.isRequired,
};

ConfirmationButton.defaultProps = {
  confirmation: '',
};

export default ConfirmationButton;
