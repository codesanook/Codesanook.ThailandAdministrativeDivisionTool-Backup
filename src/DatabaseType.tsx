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
        <div className="database-type">
            <h5>Select Database type that you want to export.</h5>
            <select>
                {supportDataBaseTypes.map(databaseType => (
                    <option key={databaseType} value={databaseType}>{databaseType}</option>
                ))}
            </select>
        </div>
    );
}
export default DatabaseType;
