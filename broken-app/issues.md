# Broken App Issues

1. Requiring and setting instances should be declared with 'const' since they will/should not be manipulated.
2. chaining results and adding on methods is messy and difficult to test
3. catch does not have an argument 
4. app.listen is incomplete, server will not start. Should also be in a seperate file
5. No error handling
6. no test file
7. no package.json