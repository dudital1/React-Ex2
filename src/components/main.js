import { useState } from "react";
import DeliveryList from "./deliveryList";
import DeliveryForm from "./deliveryForm";
import Data from '../data/deliveries.json'
import { Box } from '@material-ui/core';
import Image from '../images/Scene.svg'; 


const styles = {
    boxContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center' ,
        padding: '70px' , 
        position: 'absolute' , 
        right: '0px' , 
        width: '75%',
        height: '85%'
    }
};

const Delivery = () => {
    const [deliveries, setDeliveries] = useState(Data);
    const [deliveryToUpdate, setDeliveryToUpdate] = useState(null);

    const handleDelete = (id) => {
        const newDeliveries = deliveries.filter(delivery => delivery.id !== id);
        setDeliveries(newDeliveries);
    }
    const modifyDelivery = (newDelivery) => {
        if(!newDelivery.name || !newDelivery.city || !newDelivery.date){ // validation that form is full
            setDeliveryToUpdate({id:"",name: "",city:"",date:""});
            return;
        }
        if(!newDelivery.id){                            
            newDelivery.id = nextId(deliveries);
            deliveries.push(newDelivery);
            setDeliveries([...deliveries]);
        }
        else{
            const updatedDelivery = deliveries.find(delivery => delivery.id === newDelivery.id);
            deliveries[deliveries.indexOf(updatedDelivery)] = newDelivery;
            setDeliveries([...deliveries]);
        }
        setDeliveryToUpdate({id:"",name: "",city:"",date:""});
    }

    const wichToUpdate = (id) => {
        const newDelToUpdate = deliveries.find(delivery => delivery.id === id);
        setDeliveryToUpdate(newDelToUpdate);
    }

    function  nextId(deliveries) {
        let maxId = Math.max(...deliveries.map((curr) => curr.id));
        if(maxId > 0)
            return ++maxId;
        else return 1;
    }

    return (
        <Box style={styles.boxContainer} component="div" display="flex" >
            <DeliveryList deliveries={deliveries} handleDelete={handleDelete} wichToUpdate={wichToUpdate} />
            <DeliveryForm deliveryToUpdate={deliveryToUpdate} modifyDelivery={modifyDelivery} />
        </Box>
    );
}

export default Delivery;




