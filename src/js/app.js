
/*var personas = require('./personas.js');

var $ =require('jquery');

require('../css/style.css');


$.each(personas,function(key,value){

	$('body').append('<h1>'+personas[key].name+'</h1>');

});



*/
import React from 'react';
import {render} from 'react-dom';
import Hola from './Hola';



render(<Hola />, document.getElementById('root'));
