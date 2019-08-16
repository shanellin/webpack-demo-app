exports.main = (req, res) => {
    //req.app.get('memoryFile')({req, res, file: "template.html"})
    req.app.get('distFile')({req, res, file: "template.html"})
}
exports.main2 = (req, res) => {
    //req.app.get('memoryFile')({req, res, file: "template2.html"})
    req.app.get('distFile')({req, res, file: "template2.html"})
}