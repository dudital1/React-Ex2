import { Box , Fab , List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    list: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between' , 
        flexWrap: 'wrap' ,
        marginTop: '12px' , 
        marginLeft: '10px',
        marginRight: '10px',
    },

    divBox: {
        marginLeft: '30px',
        minWidth: '80px'
    },
    wrapper: {
        backgroundColor: 'white' ,
        borderRadius: 7,
        width:'60%',
        marginLeft: '150px', 
        marginTop: '30px' , 
        overflow: 'auto'
    }
  });
const DeliveryList = ({ deliveries, handleDelete, wichToUpdate }) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            {deliveries.map((delivery,i )=> (
                <List className={classes.list} key={delivery.id}>
                    <Box component="div" display="inline">{i+1}</Box>
                    <Box className={classes.divBox} component="div" display="inline">{delivery.date}</Box>
                    <Box className={classes.divBox} component="div" display="inline">{delivery.name}</Box>
                    <Box className={classes.divBox} component="div" display="inline">{delivery.city}</Box>
                    <Fab size="small" color="secondary" aria-label="edit" onClick={() => wichToUpdate(delivery.id)}><EditIcon /></Fab>
                    <Fab size="small" color="secondary" aria-label="delete" onClick={() => handleDelete(delivery.id)}><DeleteIcon /></Fab>
                </List>
            ))}
        </Box>
    );
}

export default DeliveryList;