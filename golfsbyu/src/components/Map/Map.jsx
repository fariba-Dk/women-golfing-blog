import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from './styles';
import useStyles from './styles.js';

const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  const coordinates = { lat: 0,lng:0}


  //let coords = { lat: 34.052235, lng:-118.243683}

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyDmwmZ-uAA_kDCvH1b9ERanUWW597eNlkw'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
