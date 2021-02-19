# rendertron-volto

Per una installazione di `rendertron` da utilizzare per il rendering di un sito
Volto (es: io-Comune) con `chrome headless` da dare in pasto ai bot (es: googlebot).

È già presente il suo `ecosystem.config.js` per poterlo usare con pm2.


**NB:**: Per abilitare il `config.json` in caso di modifiche, usare lo script
`enable_config_json` e poi riavviare `rendertron-volto`.


---

Generato con:

```
npm init
npm install rendertron
```

Aggiunto `"start": "node_modules/rendertron/bin/rendertron",` alla sezione
`scripts` del  `package.json`.

Aggiunto il file `config.json` per le impostazioni di base.



---
