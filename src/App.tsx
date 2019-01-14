import * as React from "react";
import AdministrativeDivision from "./AdministrativeDivision";
import DatabaseType from "./DatabaseType";
import SqlExport from "./SqlExport";
import "./App.css"

const App: React.FunctionComponent = () => {
    return (
        <div id="main">
            <div className="head">
                Thailand Administrative Division Export Tool
            </div>
            <div className="body">
                <DatabaseType />
                <AdministrativeDivision title={'Province'} />
                <AdministrativeDivision title={'District'} />
                <AdministrativeDivision title={'Subdistrict'} />
                <SqlExport />
            </div>
        </div>
    )
};

export default App