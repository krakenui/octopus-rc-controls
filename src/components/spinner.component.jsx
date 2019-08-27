import React from 'react';
import { showSpinner, hideSpinner } from '../core/services/spinner.service';

class SpinnerComponent extends React.Component {
    componentWillMount() {
        showSpinner();
    }

    componentWillUnmount() {
        hideSpinner();
    }

    render() {
        return <div className="hidden" />;
    }
}

export default SpinnerComponent;
