import React, { useState } from 'react';

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

const SqlScript: React.FunctionComponent<{ placeHolder: string }> = ({ placeHolder }) => {
  const [isSelected, setIsSelected] = useState(true);
  const [additionalTextEditorClasses, setAdditionalTextEditorClasses] = useState([]);

  const handleOnChange = (): void => {
    const newValue = !isSelected;
    setIsSelected(newValue);
    if (newValue) {
      setAdditionalTextEditorClasses([]);
    } else {
      setAdditionalTextEditorClasses(['-disabled']);
    }
  };

  return (
        <div className='sql-editor'>
            <input type='checkbox'
                checked={isSelected}
                onChange={handleOnChange} />
            <textarea className={['script', ...additionalTextEditorClasses].join(' ')}
                disabled={!isSelected}
                defaultValue={placeHolder} />
        </div>
  );
};

// with default prop
const AdministrativeDivision: React.FunctionComponent<IProps> = ({
  createTableSqlStatementPlaceHolder = 'CREATE TABLE ...',
  insertRecordSqlStatementPlaceHolder = 'INSERT INTO TABLE ...',
  ...props
}) => {
  return (
        <div className='administrative-division' data-division-type={DivisionType[props.type].toLowerCase()}>
            <div className='content-header'>{props.title}</div>
            <ul className='sql-editor-list'>
                <li className='column'>
                    Available column names: Id, Name
                </li>
                <li className='editor'>
                    <SqlScript placeHolder={createTableSqlStatementPlaceHolder} />
                </li>
                <li className='editor'>
                    <SqlScript placeHolder={insertRecordSqlStatementPlaceHolder} />
                </li>
            </ul>
        </div>
  );
};

export default AdministrativeDivision;
