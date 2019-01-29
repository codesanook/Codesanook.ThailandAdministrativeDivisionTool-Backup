import * as React from "react";
import { FunctionComponent } from 'react'
import "./SqlExport.css"

const SqlExport: FunctionComponent = () => {

    const handleExport = () => {
        alert('exported');
    }

    return (
        <div className="text-right sql-export">
            <button type="button" className="btn-export" onClick={handleExport}>
                Export
            </button>
        </div>
    );
}
export default SqlExport;
