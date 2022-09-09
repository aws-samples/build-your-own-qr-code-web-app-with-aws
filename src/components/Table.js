import React from 'react'
import './Table.css'

/* update table to take in data + column as properties */
/* the map is taking the item and setting it to the TableHeadItem component, which is down below in the code */

const Table = ({ data, column}) => {
    return (
            <table>
                <thead>
                    <tr>
                        {column.map((item, index) => <TableHeadItem item={item} />)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <TableRow item={item} column={column} />)} 
                </tbody>
            </table>
    )
}

/* this takes the data and displays what type of object it should appear as*/

const TableHeadItem = ({ item }) => <th> {item.heading} </th> 

/* Able to log in console by doing console.log(item['name]); */

const TableRow = ({item, column}) => (
    <tr>
        {column.map((columnItem, index) => {
            if(columnItem.value.includes('.')) {
                const itemSplit = columnItem.value.split('.') //['address', 'city']
                return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
            }
            return <td>{item[`${columnItem.value}`]}</td>
        }
        )}
    </tr>
)

export default Table