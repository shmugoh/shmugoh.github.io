const showdown = require('showdown');
const ejs = require('ejs');
const fs = require('fs');

let converter = new showdown.Converter();

async function readDir(src = './markdown') {
    let files = [];
    fs.readdir(src, (err, data) => {
        data.forEach((file) => {
            files.push(file);
        });
    });
    return files;
}

async function creadProdEnv() {
    fs.mkdir('prod');
    let staticFiles = await readDir('./static');
    let cssFiles = await readDir('./static');

    staticFiles.forEach((file) => {
        if (file != String(file).match('.*.ejs$'))
            fs.copyFile(`./static/${file}`, `./prod/${file}`);
    });
    cssFiles.forEach((file) => {
        if (file == String(file).match('.*.css$'))
            fs.copyFile(`./css/${file}`, `./prod/${file}`);
    });

    return 1;
}

function parseMarkdown(src = './markdown/index.md', mode = 'template') {
    let fileRegEx = src.match(/([^\\]*)\.(\w+)$/);
    let fileName = fileRegEx[1];
    let fileFormat = fileRegEx[2];

    if (fileFormat != 'md') {
        console.error(
            `${fileName}.${fileFormat} in /markdown/ not .md. Proceeding to skip`
        );
        return;
    }

    fs.readFile(src, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        converter.setOption('tables', true);
        var input = converter.makeHtml(data);

        ejs.renderFile(
            `./static/${mode}.ejs`,
            { output: input },
            (err, str) => {
                fs.writeFile('./prod/index.html', str, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        );
    });
}
