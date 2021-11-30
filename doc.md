# Nodejs CI/CD

## CD

- creazione workflow: andare su actions (del repo), crearlo e pusharlo
- impostazione runner: andare su settings/actions/runners e crearne uno nuovo.
- installazione runner: andare su server e seguire la guida
- esecuzione runner: lanciare lo script ./run.sh per testare. Poi lanciare il runner come servizio tramite lo script
  `sudo ./svc install`
  `sudo ./svc status`
  `sudo ./svc start`

## TODO

- risolvere problema cancellazione file .env (perchè messo nel .gitignore)
- far funzionare il file ecosystem.config.js con gli ES modules
- capire come disinstallare runner, ecc
