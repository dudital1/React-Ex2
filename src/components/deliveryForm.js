import { useState , useEffect} from "react";
import { TextField , Button , Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #EE4D47 100%, #EE4D47 100%)',
      borderRadius: 4,
      color: 'white',
      height: 48,
      width: '20%', 
      margin: 'auto',
      marginTop:'0px',
      textTransform: 'capitalize', 

    },
    marginBox: {
        marginBottom: '20px' , 
        borderRadius:4,
        backgroundColor:'white' , 
        width: '300px' , 
    },
  });

const DeliveryList = ({ deliveryToUpdate, modifyDelivery }) => {
    const classes = useStyles();
    const [tmpDelivery, setTmpDelivery ] = useState({...deliveryToUpdate});

    useEffect(() => {
        setTmpDelivery({...deliveryToUpdate});
    }, [deliveryToUpdate]);
        
    function changeName(event) {
        setTmpDelivery({...tmpDelivery,name:event.target.value});
    }
    function changeDate(event) {
        setTmpDelivery({...tmpDelivery,date:event.target.value});
    }
    function changeCity(event) {
        setTmpDelivery({...tmpDelivery,city:event.target.value});
    }

    function onClick(){
        modifyDelivery(tmpDelivery);
    }

    return (
        <Box 
            display="flex" 
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            marginLeft="70px"
            marginTop="30px"
      >
            <TextField error className={classes.marginBox} value={tmpDelivery.name} onChange={changeName} size="big" variant="outlined"/>
            <TextField error className={classes.marginBox} value={tmpDelivery.date} onChange={changeDate} size="big" variant="outlined"/>
            <TextField error className={classes.marginBox} value={tmpDelivery.city} onChange={changeCity} size="big" variant="outlined"/>
            <Button onClick={onClick} classes={{ root: classes.root, label: classes.label }}>{tmpDelivery.id?"Save":"Add"}</Button>
        </Box>
    );
}

export default DeliveryList;