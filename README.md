# Alboino_eXtreme_v2

Un portale di Auletta Aumentata in MeteorJS e Semantic UI.

## Getting Started

Le istruzioni permettono di avere una copia locale e funzionante del progetto, per scopi di sviluppo e test. Per il deploy del progetto si veda __deployment__.

### Prerequisiti

Per funzionare, Alboino_eXtreme_v2 ha bisogno di [MongoDB](https://www.mongodb.com/it) e [Meteor](https://www.meteor.com/). 
[Semantic UI](https://semantic-ui.com/) è già pre-installato nel progetto e va solo compilato, le relative istruzioni saranno presentate nella sezione di __installazione__.

Installazione di __MongoDB Community Edition__:
* [macOS](https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-os-x/)
* [Linux](https://docs.mongodb.com/getting-started/shell/tutorial/install-on-linux/)
* [Windows](https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-windows/)

Installazione di __MeteorJS__:
* macOS/Linux:

   ```
   $ curl https://install.meteor.com/ | sh
   ```

* Windows (prima è necessario installare [chocolatey](https://chocolatey.org/install)):

   ```
   $ choco install meteor
   ```

### Installazione

Per avere l'ambiente di sviluppo operativo, una volta installati i prerequisiti, seguire in ordine i seguenti passaggi.

1. Clonare il repo in una destinazione a piacere

   ```
   $ mkdir Alboino_eXtreme_v2
   $ git clone https://github.com/FrancescoFilippi/alboino_eXtreme_v2
   ```
   oppure `$ git clone https://github.com/FrancescoFilippi/alboino_eXtreme_v2 Alboino_eXtreme_v2`
   
2. Spostarsi nella cartella clonata `$ cd Alboino_eXtreme_v2`e creare
   
   . una cartella `/public` nella root del progetto, dove verranno salvati i file statici pubblici
   
   ```
   $ mkdir public
   ```
   
   . due cartelle `/lib/semantic-ui/` e il file `/lib/semantic-ui/custom.semantic.json` all'interno di `/client`, dove verranno compilati e salvati tutti i file di Semantic UI
   
   ```
   $ cd client
   $ mkdir -p lib/semantic-ui
   $ cd lib/semantic-ui
   $ touch custom.semantic.json
   ```
   
3. Tornare nella root del progetto ed installare tutte le dipendenze specificate nel `package.json`, verranno salvate in `/node-modules`
 
   ```
   $ meteor npm install
   ```
 
4. Lanciare meteor, sempre nella root del progetto, per compilare Semantic UI
 
   ```
   $ meteor npm install
   ```
 
   interrompere poi il processo di meteor e spostarsi in `client/lib/semantic-ui/`, dove a questo punto ci sarà, oltre al resto della libreria, una copia del file creato al punto 2 generato da Semantic. Rimuovere il file `.custom.semantic.json` (il file preceduto dal punto è la copia).
   
5. Dalla root del progetto, lanciando nuovamente meteor si dovrebbe avere tutto l'ambiente funzionante, raggiungibile all'indirizzo `http://localhost:3000/`.

## Deployment

> da scrivere

## Contributing

> da scrivere, insieme al CONTRIBUTING.md

## Authors

* **Francesco Filippi** - [Profilo](https://github.com/FrancescoFilippi).

## License

Il progetto è distribuito con licenza MIT - si veda il file [LICENSE.md](LICENSE.md) per i dettagli.
