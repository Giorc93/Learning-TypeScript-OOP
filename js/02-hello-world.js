console.log("Hello world from TS");
alert("Hello world from TS on watch mode");
//Compile the TS file from terminal on its path using tsc file-name.ts.
//This will create a JS file with the same TS content compiled and ready to load on the HTML file.
//Any change on the TS file require a new compilation to load changes on the JS file.
//tsc -w *.ts starts the compilation on watch mode, compiles changes on files instantly. Must be executed from terminal on the .ts files path
