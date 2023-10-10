const showdown = require('showdown');
const ejs = require('ejs');
const fs = require('fs');
const readline = require('readline');

let converter = new showdown.Converter();

// Reads Directory and returns available files
async function readDir(src = './markdown') {
    let files = [];

    return new Promise((resolve) => {
        setTimeout(function () {
            fs.readdir(src, (err, data) => {
                data.forEach((file) => {
                    files.push(file);
                });
                resolve(files);
            });
        }, 250);
    });
}

// File Name RegEx
function processFileName(filename = 'index.md') {
    return String(filename).match(/([^\\]*)\.(\w+)$/);
}

// Iterates thru each file in /markdown/ and saves it as HTML Raw Nav String
// with its corresponding title (obtained from Header) & filename
async function processNavBar(src = './markdown') {
    const markdownFiles = await readDir(src);
    let buff = '';

    return new Promise(async (resolve) => {
        setTimeout(async function () {
            for (const file of markdownFiles) {
                const readable = fs.createReadStream(`${src}/${file}`);
                const reader = readline.createInterface({ input: readable });

                let line;
                for await (const fileLine of reader) {
                    line = fileLine;
                    break;
                }

                readable.close();

                let fileRegEx = processFileName(file);
                let fileName = fileRegEx[1];

                buff += `<a href="./${fileName}.html"> ${
                    line.match(/#\W(.+)/)[1]
                }</a> |\n`;
            }
            resolve(buff);
        });
    });
}

// Creates Production Environment. Usually done before parsing Markdown
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

// Parses Markdown to HTML
function parseMarkdown(src = './markdown/index.md', mode = 'template', navbar) {
    let fileRegEx = processFileName(src);
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
        var markdownContent = converter.makeHtml(data);

        ejs.renderFile(
            `./static/${mode}.ejs`,
            { navbar: navbar, markdownContent: markdownContent },
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

let x;

(async () => {
    x = await processNavBar();
    console.log(x);
    await parseMarkdown('./markdown/index.md', 'template', x);
})();
