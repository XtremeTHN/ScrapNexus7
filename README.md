# Scrap Nexus 7
El objetivo de este proyecto, es lograr hacer webscrapping a nexus, para poder crear una aplicacion de escritorio, ya que la UANL no se ha molestado en hacerlo xd

### Observaciones

El codigo de la uanl es de espagetti xd, no le entiendo nada.

#### 23/08/2024
Logre descubrir unas cuantas cosas de la pagina de logeo:
  - Donde se ponen los datos es un <frame> xd, es una pagina dentro de otra
  - En el frame hay un <form> el cual envia los datos ingresados a 
      `https://deimos.dgi.uanl.mx/cgi-bin/wspd_cgi.sh/eselcarrera.htm`
  - Los datos se envian mediante un metodo POST en este formato:
  `{'HTMLTipCve': '01', 'HTMLUsuCve': '', 'HTMLPassword': '', 'HTMLPrograma': ''}`
  O algo asi, pq cuando mande el metodo post me decia que faltaban datos
  
Voy a ver el codigo fuente de SIASE api, aver como manejan el logeo, aunque esta desactualizado xd

#### 24/08/2024
- Descubri porque decia que faltaban datos. Checando el codigo fuente de SIASE api, pude notar que hacen uso de `URLSearchParams` y `axios`. Cree un proyecto de nodejs para probar axios, y funciono.
- Ahora investigue alguna alternativa de URLSearchParams para python, y vi que el metodo `.post()` de `requests` tenia un argumento llamado params.
- Ayer estaba intentando mandar mis datos por el argumento `json`, asi que era por eso.
- Ahora me devuelve el html de la pagina de inicio de siase, asi que voy por buen camino.

