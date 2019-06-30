import React, { useState } from 'react';
import './App.css';
import Data from './data';
import Button from './button';
import Table from './table';
import Text from './text';
import Row from './row';
import TableHead from './table/TableHead';

function App() {
  const [tableData, setTableData] = useState(Data);

  const setChoice = (index, checked, mode) => {
    const updatedState = { ...tableData };

    switch (mode) {
      case 'delicious':
        updatedState[index].isDelicious = checked;
        break;
      case 'healthy':
        updatedState[index].isHealthy = checked;
        break;
      default:
        break;
    }

    setTableData(updatedState);
  };

  const printData = () => {
    // eslint-disable-next-line no-console
    console.table(tableData);
  };

  return (
    <div className="App">
      <Table data={tableData}>
        <TableHead>
          <Text>Label</Text>
          <Text>Delicious</Text>
          <Text>healthy</Text>
        </TableHead>
        <Row>
          {(row) => {
            const {
              label, isDelicious, isHealthy, index,
            } = row;
            return (
              <>
                <Text>{`${label}`}</Text>
                <Text>
                  <input
                    type="checkbox"
                    checked={isDelicious}
                    onChange={(e) => {
                      setChoice(index, e.target.checked, 'delicious');
                    }}
                  />
                </Text>
                <Text>
                  <input
                    type="checkbox"
                    checked={isHealthy}
                    onChange={(e) => {
                      setChoice(index, e.target.checked, 'healthy');
                    }}
                  />
                </Text>
              </>
            );
          }}
        </Row>
      </Table>
      <Button label="click me" onClick={printData} />
    </div>
  );
}

export default App;
