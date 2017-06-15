import React, {PropTypes} from 'react';


const ArrowButton = ({button = {}, label, labels, monthYearNavigation}) => {
    const {hide} = button;
    return (
        (!hide) && <td className={label}>
            <button
              aria-label={labels[label]}
              aria-disabled={!button.date}
              onClick={() => (button.date) && monthYearNavigation(button.date)}
            />
        </td>
    );
};
ArrowButton.propTypes = {

};

export default ArrowButton;
