import * as React from "react";
import "./DatabaseType.css"

const supportDataBaseTypes = [
    "MySQL",
    "SQL Server",
    "Oracle",
    "SQLite",
]

const DatabaseType: React.FunctionComponent = () => {
    return (
        <div className="row">
            <div className="col-12">

                <h6>Select Database type that you want to export.</h6>
                <div className="text-center">
                    <select>
                        {supportDataBaseTypes.map(databaseType => (
                            <option value={databaseType}>{databaseType}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
export default DatabaseType;
