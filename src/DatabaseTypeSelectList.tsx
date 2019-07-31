import * as React from "react";

const supportDataBaseTypes = [
    "MySQL",
    "SQL Server",
    "Oracle",
    "SQLite",
    "PostgreSQL",
]

const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(e.currentTarget.value);
};

const DatabaseTypeSelectList: React.FunctionComponent = () => {
    return (
        <div className="database-type">
            <h5>Please select a database type that you want to export.</h5>
            <select className="database-type__list" onChange={onSelectChange}>
                {supportDataBaseTypes.map(databaseType => (
                    <option key={databaseType} value={databaseType}>{databaseType}</option>
                ))}
            </select>
        </div>
    );
}
export default DatabaseTypeSelectList;
