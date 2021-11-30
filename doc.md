# Nodejs CI/CD

## CD

- creazione workflow: andare su actions (del repo), crearlo e pusharlo
- impostazione runner: andare su settings/actions/runners e crearne uno nuovo.
- installazione runner: andare su server e seguire la guida
- esecuzione runner: lanciare lo script ./run.sh per testare. Poi lanciare il runner come servizio tramite lo script
  `sudo ./svc install`
  `sudo ./svc status`
  `sudo ./svc start`

- siccome il file .env non viene aggiunto a repo, il checkout delle GA lo cancellano.
  Per ovviare viene creato il file .env dentro il workflow, prendendo le variabili sensibili dalle secrets del repo stesso.
  Per cui, prima di tutto, impostare le secrets e aggiungere l'environment al file di workflow

## TODO

- provare pacchetto fastify per node env + env tramite workflow file
- far funzionare il file ecosystem.config.js con gli ES modules
- capire come disinstallare runner, ecc
