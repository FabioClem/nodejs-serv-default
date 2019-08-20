import app from './app';
import _ = require("./config/config");
app.listen(_.SeverConfig.servPORT, () => {
    console.log('Servidor on, na porta: ' + _.SeverConfig.servPORT);
});