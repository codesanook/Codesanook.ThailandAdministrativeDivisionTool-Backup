import * as React from "react";
import AdministrativeDivision from "./AdministrativeDivision";
import DatabaseTypeSelectList from "./DatabaseTypeSelectList";
import SqlExport from "./SqlExport";

const App: React.FunctionComponent = () => {
    return (
        <div className='app'>
            <div className='header'>
                Thailand Administrative Division Export Tool
            </div>
            <div className='content-body'>
                <DatabaseTypeSelectList />
                <AdministrativeDivision title={'Province'} additionalClassNames={['province']} />
                <AdministrativeDivision title={'District'} additionalClassNames={['district']} />
                <AdministrativeDivision title={'Subdistrict'} additionalClassNames={['subdistrict']} />
                <SqlExport />
            </div>
        </div>
    )
};

export default App
