const ex01 = () => { 
	console.log( "Hi from GeekforGeeks!" ); 
} 
const ex02 = ( x, y, z ) => { 
	console.log( x + y + z ) 
} 
const ex03 = ( x, y, z = 30 ) => { 
	console.log( x + " " + y + " " + z); 
} 

ex03( 10, 20 );

ex02( 10, 20, 30 );

ex01();
