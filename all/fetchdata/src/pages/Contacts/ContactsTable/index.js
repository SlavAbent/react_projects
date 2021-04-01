import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'

const useStyles = makeStyles({
    table: {
      
    },
  });

export const ContactsTable = ({data}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="contacts table">
                <TableHead>
                <TableRow>
                    <TableCell>Avatar</TableCell>
                    <TableCell>Fullname</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Nationality</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((contact) => (
                    <TableRow key={contact.login.id}>
                    <TableCell>
                        <Avatar alt="Remy Sharp" src={contact.picture.thumbnail} />
                    </TableCell>
                    <TableCell>{contact.name.title} {contact.name.first} {contact.name.last}</TableCell>
                    <TableCell>
                        <Typography>{format(parseISO(contact.dob.date), 'MM/dd/yyyy')}</Typography>
                        <Typography>{contact.dob.age} years</Typography>
                    </TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>7</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}