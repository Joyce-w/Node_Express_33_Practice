const fs = require('fs')
const axios = require('axios')

function readFile(fileName) {
  
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(`File name does not exist: ${err}`)
            process.exit(1)
        }
        let urlArr = data.toString().split("\n");

        // with each url in the arr
        for (let url of urlArr) {
            readUrl(url)            
        }

    });

}


async function readUrl(u) {
    try {
        let url = u

        // cut domain name for filename
        let start = url.lastIndexOf(':')
        start += 3
        let end = 0
        if (url.includes('com')) {
            end = url.lastIndexOf('com')

        }
        if ((url.includes('org'))){
            end = url.lastIndexOf('org')
        }
        end += 3
        let domain = url.slice(start,end)
        
        // get url data
        let response = await axios.get(url)

        //write a file, pass in response data
        fs.writeFile(`${domain}.txt`, response.data, 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                process.exit(1)
            }
            console.log("file created!")
        });
    } catch (e) {
        console.log(`ERROR: Cannot write to a particular file output. ${e}`)
    }
}


readFile(process.argv[2])


/*Start: 7:44pm 4/8 */