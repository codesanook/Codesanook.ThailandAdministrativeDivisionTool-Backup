import * as React from 'react'
import { FunctionComponent, useState } from "react"

interface IProps {
    title: string;
    additionalClassNames: string[];
    createTableSqlStatement?: string;
    insertRecordSqlStatement?: string;
}

const AdministrativeDivision: FunctionComponent<IProps> = ({
    createTableSqlStatement = 'CREATE TABLE ...',
    insertRecordSqlStatement = 'INSERT INTO TABLE ...',
    ...props
}) => {

    const [selectedCreateStatement, setSelectedCreateStatement] = useState(true);
    const [selectedInsertStatement, setSelectedInsertStatement] = useState(true);

    const classNames = (): string => {
        return props.additionalClassNames.join(' ');
    }

    const handleSelectedCreateStatement = (): void => {
        const newValue = !selectedCreateStatement;
        setSelectedCreateStatement(newValue)
    };

    const handleSelectedInsertStatement = (): void => {
        const newValue = !selectedInsertStatement;
        setSelectedInsertStatement(newValue)
    };

    return (
        <div className={`administrative-division ${classNames()}`}>
            <h5>{props.title}</h5>
            <ul className='sql-script-list'>
                <li className='sql-available-columns'> Available column name </li>
                <li className='sql-script create-table'>
                    <input type="checkbox"
                        checked={selectedCreateStatement}
                        onChange={handleSelectedCreateStatement} />
                    <textarea className='editor'
                        disabled={!selectedCreateStatement}
                        value={createTableSqlStatement} />
                </li>
                <li className='sql-script insert-record'>
                    <input type='checkbox'
                        checked={selectedInsertStatement}
                        onChange={handleSelectedInsertStatement} />
                    <textarea className='editor'
                        disabled={!selectedInsertStatement}
                        value={insertRecordSqlStatement} />
                </li>
            </ul>
        </div>
    )
};

export default AdministrativeDivision
