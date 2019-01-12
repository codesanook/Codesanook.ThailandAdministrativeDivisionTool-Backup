import * as React from "react";
import AdministrativeDivision from "./AdministrativeDivision";
import DatabaseType from "./DatabaseType";
import SqlExport from "./SqlExport";

const App: React.FunctionComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h5> Thailand administrative division export tool </h5>
                </div>
            </div>
            <DatabaseType />
            <AdministrativeDivision title={'province'} />
            <AdministrativeDivision title={'district'} />
            <AdministrativeDivision title={'subdistrict'} />
            <SqlExport />
        </div>
    )
};

export default App