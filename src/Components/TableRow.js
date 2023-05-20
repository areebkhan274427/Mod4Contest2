function TableRow(prop){
        return(
            <tbody>
                {
                    prop.dataArray.map((value)=>
                        <tr key={value.id}>
                            <td><img src={value.image} /></td>
                            <td>{value.name}</td>
                            <td>{value.id}</td>
                            <td>{value.symbol}</td>
                            <td>${value.current_price}</td>
                            <td>${value.total_volume}</td>
                        </tr>
                    )
                }
            </tbody>
        )
}

export default TableRow;