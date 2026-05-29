const fetchUsers = () => {
    //const response = await fetch('https://jsonplaceholder.typicode.com/users');

    fetch('https://jsonplaceholder.typicode.com/users').then( (response) => {
        console.log(response);

        if( !response.ok ){
            console.log("Error al llamar el API");
        }

        const response2 = response.clone();

        const usuariosJson = response.json();                
        const usuariosStr =  response2.text(); 
        
        //Solucion de procesar 2 operaciones sin usar await
        return Promise.all([usuariosJson, usuariosStr]).then(([json, str]) => {
            return { json, str };            
        });

    }).then( (responses) => {
        console.log( `json user[0].name: ${responses.json[0].name}` );
        console.log( "str: "+responses.str.substring(0,25)+"..." );
    });    
}

fetchUsers();

const createPost = async (title, body) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {title, body, userId: 1} )
    });

    if( !response.ok ){
        throw new Error(`Unable to make a POST request`);
    }
    const created = await response.json();
    console.log( created );
}

createPost("Titulo1", "Body from my post");



const randomUser = 'https://randomuser.me/api/';

