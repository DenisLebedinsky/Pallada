import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import css from './Table.module.scss'

interface MyTableProps {
  data: Item[]
  onEdit: (item) => void
  onDelete: (item) => void
}

type Item = {
  name: string
  id: string
}

export default function MyTable({ data, onEdit, onDelete }: MyTableProps) {
  const handleDelete = (e, item) => {
    e.stopPropagation()
    onDelete(item)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={css.table} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            {/*<TableCell align='right'></TableCell>*/}
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className={css.row} onClick={() => onEdit(item)}>
              <TableCell component='th' scope='row'>
                {item.name}
              </TableCell>
              {/*{!!edit && (*/}
              {/*  <TableCell align='right'>*/}
              {/*    <EditIcon />*/}
              {/*  </TableCell>*/}
              {/*)}*/}
              <TableCell align='right' onClick={(e) => handleDelete(e, item)}>
                <DeleteIcon className={css.deleteIcon} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
