function actualizaCacheDinamico( dynamicCache, req, res ) {
    if ( res.ok ) {
        return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );
            
            return res.clone();
        });
    } else {
        return res;
    }
}

// Cache with network update
function actualizaCacheStatico( staticCache, req, APP_SHELL_INMUTABLE ) 
{
    if ( APP_SHELL_INMUTABLE.includes(req.url) ) 
    {

    } 
    else 
    {
        return fetch( req )
                .then( res => 
                    {
                        return actualizaCacheDinamico( staticCache, req, res );
                });
    }
}

function manejoApiMensajes(dynamicCache, req)
{

    if(req.clone().method === 'POST')
    {

        if ( self.registration.sync ) {
            return req.clone().text().then( body =>{

                // console.log(body);
                const bodyObj = JSON.parse( body );
                return guardarMensaje( bodyObj );

            });
        } else {
            return fetch( req );
        }

    }

        else
        {
            return fetch( req ).then( res => {

                if ( res.ok ) {
                    actualizaCacheDinamico( cacheName, req, res.clone() );
                    return res.clone();
                } else {
                    return caches.match( req );
                }
    
            }).catch( err => {
                return caches.match( req );
            });
        }

    }

        
        


