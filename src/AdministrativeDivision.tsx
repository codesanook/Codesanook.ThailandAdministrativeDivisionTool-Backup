import * as React from 'react'
import { useState } from "react"

export enum DivisionType {
    Province,
    District,
    Subdistrict
}

interface IProps {
    title: string;
    type: DivisionType;
    createTableSqlStatement?: string;
    insertRecordSqlStatement?: string;
}

// with default prop
const AdministrativeDivision: React.FunctionComponent<IProps> = ({
    createTableSqlStatement = 'CREATE TABLE ...',
    insertRecordSqlStatement = 'INSERT INTO TABLE ...',
    ...props
}) => {

    const [selectedCreateStatement, setSelectedCreateStatement] = useState(true);
    const [selectedInsertStatement, setSelectedInsertStatement] = useState(true);

    const handleSelectedCreateStatement = (): void => {
        const newValue = !selectedCreateStatement;
        setSelectedCreateStatement(newValue)
    };

    const handleSelectedInsertStatement = (): void => {
        const newValue = !selectedInsertStatement;
        setSelectedInsertStatement(newValue)
    };

    return (
        <div className='administrative-division' data-division-type={DivisionType[props.type].toLowerCase()}>
            <h5>{props.title}</h5>
            <ul className='sql-script-list'>
                <li className='sql-available-columns'> Available column name: Id, Name</li>
                <li className='sql-script create-table'>
                    <input type="checkbox"
                        checked={selectedCreateStatement}
                        onChange={handleSelectedCreateStatement} />
                    <textarea className='editor'
                        disabled={!selectedCreateStatement}
                        defaultValue={createTableSqlStatement} />
                </li>
                <li className='sql-script insert-record'>
                    <input type='checkbox'
                        checked={selectedInsertStatement}
                        onChange={handleSelectedInsertStatement} />
                    <textarea className='editor'
                        disabled={!selectedInsertStatement}
                        defaultValue={insertRecordSqlStatement} />
                </li>
            </ul>
        </div>
    )
};

export default AdministrativeDivision
