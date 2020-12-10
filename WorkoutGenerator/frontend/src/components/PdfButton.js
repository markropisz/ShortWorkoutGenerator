import React from 'react';
import './index.css';
import { Button } from 'antd';
import { CSVLink } from "react-csv"; 



class PdfButton extends React.Component {
    render() {
        return(
            <Button
                // onClick={}
            >
                Extract a list of chosen exercises
            </Button>
        )
    };
}

export default PdfButton;
