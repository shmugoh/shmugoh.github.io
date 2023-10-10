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

                let fileRegEx = String(file).match(/([^\\]*)\.(\w+)$/);
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
async function createProdEnv() {
    fs.mkdir('./prod', (err) => {
        if (err) {
            return console.error(err);
        }
    });
    let staticFiles = await readDir('./static');
    let cssFiles = await readDir('./css');

    staticFiles.forEach((file) => {
        if (file != String(file).match('.*.ejs$'))
            fs.copyFile(`./static/${file}`, `./prod/${file}`, (err) => {
                if (err) {
                    return console.error();
                }
            });
    });
    cssFiles.forEach((file) => {
        if (file == String(file).match('.*.css$')) {
            fs.copyFile(`./css/${file}`, `./prod/${file}`, (err) => {
                if (err) {
                    return console.error();
                }
            });
        }
    });

    return 1;
}

// Parses Markdown to HTML
function parseMarkdown(src = './markdown/index.md', mode = 'template', navbar) {
    let fileRegEx = src.match(/\/.*\/([^\\]*)\.(\w+)$/);
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
                fs.writeFile(`./prod/${fileName}.html`, str, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        );
    });
}

(async () => {
    await createProdEnv();
    let files = await readDir('./markdown');
    let navbar = await processNavBar();

    files.forEach(async (file) => {
        await parseMarkdown(`./markdown/${file}`, 'template', navbar);
    });
})();
