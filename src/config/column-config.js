const columns = [
    {
        label: 'First Name',
        prop: 'firstName',
        defaultShow: true,
        minWidth: '180px',
        formatter(row, column, cellValue) {
            return (
                <el-tag>{ cellValue }</el-tag>
            )
        }
    },
    {
        label: 'Last Name',
        prop: 'lastName',
        defaultShow: true,
        minWidth: '180px'
    }
]

export {
    columns
}
