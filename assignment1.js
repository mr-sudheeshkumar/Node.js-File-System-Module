const fs = require("fs");
const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
var menu = () => {
    console.log("\n*********  Menu  *********\n");
    console.log("1. Create a Directory.");
    console.log("2. Remove the Directory.");
    console.log("3. Write into the file.");
    console.log("4. Read from the file.");
    console.log("5. Delete the file.");
    console.log("6. Append data to the File.");
    console.log("7. Update / Replace file with new data.");
    console.log("8. Rename the File.");
    console.log("9. Exit.");
    choice();
}
var choice = () => {
    readline.question("\nPlease enter your choice : ", (ans) => {
        if (ans === "1") {
            console.log("\n======= Creating a directory =======");
            createDir();
        } else if (ans === "2") {
            console.log("\n======= Removing the directory =======");
            removeDir();
        } else if (ans === "3") {
            console.log("\n======= Writing into the file =======");
            writeFile();
        } else if (ans === "4") {
            console.log("\n======= Reading from the file =======");
            readFile();
        } else if (ans === "5") {
            console.log("\n======= Delete from the file =======");
            deleteFile();
        } else if (ans === "6") {
            console.log("\n======= Append to the file =======");
            appendFile();
        } else if (ans === "7") {
            console.log("\n======= Updating or replacing data in the file =======");
            updateFile();
        } else if (ans === "8") {
            console.log("\n======= Renaming the file =======");
            renameFile();
        } else if (ans === "9") {
            console.log("\nExiting the program.");
            readline.close();
        } else {
            console.log("Please enter a valid choice !!!");
            menu();
        }
    })
}
menu();
var createDir = () => {
    readline.question("\nPlease enter name of directory that you want to create : ", (ans) => {
        var dir = "./";
        dir = dir + ans;
        console.log(dir);
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) throw err;
        });
        console.log("\nDirectory created succesfully.");
        menu();
    });
};
var removeDir = () => {
    readline.question("Please enter the name of directory to be deleted : ", (ans) => {
        fs.rmdir(ans, () => {
            console.log("\nDirectory named "+ ans +" deleted Successfully.");
            menu();
        });
    });
};
var writeFile = () => {
    readline.question("\nPlease enter the file name : ", (fname) => {
        readline.question("\nEnter the contents of the file : ", (content) => {
            fs.writeFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("\nContent written to the " + fname + ".txt succesfully");
                menu();
            });
        });
    });
};
var readFile = () => {
    readline.question("\nPlease enter the file name : ", (fname) => {
        fs.readFile(fname + ".txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log(data);
            menu();
        });
    });
};
var deleteFile = () => {
    readline.question("\nPlease enter the fiename which is to be deleted : ", (fname) => {
        fs.unlink(fname + ".txt", (err) => {
            if (err) throw err;
            console.log("\nFile named" + fname + " deleted Succesfully");
            menu();
        })
    })
}
var appendFile = () => {
    readline.question("\nPlease enter the filename in which content is to be appended : ", (fname) => {
        readline.question("\nPlease enter the content : ", (content) => {
            fs.appendFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("\nContent appended to "+ fname + " succesfully.");
                menu();
            });
        });
    });
};
var updateFile = () => {
    readline.question("\nPlease enter the file name whose content is to be updated or replaced  : ", (fname) => {
        readline.question("\nPlease enter the content : ", (content) => {
            fs.writeFile(fname + ".txt", content, (err) => {
                if (err) throw err;
                console.log("\nContents of file named " + fname + "updated succesfully.");
                menu();
            });
        });
    });
}
var renameFile = () => {
    readline.question("\nPlease enter the file name(old) to be renamed : ", (fname) => {
        readline.question("\nPlease enter the new file name  :", (rename) => {
            fs.rename(fname + ".txt", rename + ".txt", (err) => {
                if (err) throw err;
                console.log("File name of "+fname+" has been changed to "+ rename +" successfully.");
                menu();
            });
        });
    });
};