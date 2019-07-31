import * as React from 'react'
import { useState } from 'react';

export enum DivisionType {
    Province,
    District,
    Subdistrict
}

interface IProps {
    title: string;
    type: DivisionType;
    createTableSqlStatementPlaceHolder?: string;
    insertRecordSqlStatementPlaceHolder?: string;
}

// with default prop
const AdministrativeDivision: React.FunctionComponent<IProps> = ({
    createTableSqlStatementPlaceHolder = 'CREATE TABLE ...',
    insertRecordSqlStatementPlaceHolder = 'INSERT INTO TABLE ...',
    ...props
}) => {

    return (
        <div className='administrative-division' data-division-type={DivisionType[props.type].toLowerCase()}>
            <div className='content-header'>{props.title}</div>
            <ul className='sql-script-list'>
                <li className='sql-script-list__column'>
                    Available column names: Id, Name
                </li>
                <li className='sql-script-list__item'>
                    <SqlScript placeHolder={createTableSqlStatementPlaceHolder} />
                </li>
                <li className='sql-script-list__item'>
                    <SqlScript placeHolder={insertRecordSqlStatementPlaceHolder} />
                </li>
            </ul>
        </div>
    )
};

const SqlScript: React.FunctionComponent<{ placeHolder: string }> = props => {
    const [isSelected, setIsSelected] = useState(true);
    const [additionalTextEditorClasses, setAdditionalTextEditorClasses] = useState([]);

    const handleOnChange = (): void => {
        const newValue = !isSelected;
        setIsSelected(newValue)
        if (newValue) {
            setAdditionalTextEditorClasses([]);
        } else {
            setAdditionalTextEditorClasses(['sql-script__editor--disabled']);
        }
    };

    return (
        <div className='sql-script'>
            <input type='checkbox'
                checked={isSelected}
                onChange={handleOnChange} />
            <textarea className={['sql-script__editor', ...additionalTextEditorClasses].join(' ')}
                disabled={!isSelected}
                defaultValue={props.placeHolder} />
        </div>
    );
};

export default AdministrativeDivision
