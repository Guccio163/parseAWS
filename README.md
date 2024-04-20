Verifying AWS::IAM::Role Policy
---
This is a recruitment task verifying an input done for Remitly.</br>

Task is written in Typescript because:
- I feel confident and efficent in it
- I hope it will stand out from the rest :)
---
Project includes unit tests (verifyTest.test.ts) and edge cases such as inputting non-compatible policy or multible Resources. </br></br> Instruction didn't specify how to resolve a situation with multiple Resources, so I assumed that function should return <b>false</b> if any of the Statements has Resources: "*".
</br>
</br>
How to run tests?

```bash
cd parseAWS
npm i
jest
```
---
Main function is in the <b>main.ts</b> file and theoretically can be run by compiling this file and runnig its <b>.js</b> product:
```bash
tsc main
node main
```
It won't return anything though, because there is no executable code, just function and type definitions.
