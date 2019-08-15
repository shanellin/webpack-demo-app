var path = require('path');
module.exports = (app, compiler) => {
    const template = require('./template');
    app.get('/', template.main);
    app.use('/main1', template.main);
    app.use('/main2', template.main2);
    //fn
    app.set('memoryFile', ({req, res, file}) => {
        console.log(file);
        compiler.outputFileSystem.readFile(path.join(compiler.outputPath, file), (err, result) => {
            if (err) {
                return next(err);
            }
            res.set("content-type", "text/html");
            res.send(result);
            res.end();
        });
    });
}