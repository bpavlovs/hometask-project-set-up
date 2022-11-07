## Quick guide on "hometask-project-set-up" installation

This project is an example setup of "Unit and Integration Tests Hometask". 

To ensure correct project installation, please refer to the below step-by-step walkthrough.

#### Step 1: Clone the repository to your local device & set up dependencies

1. Repository can be accessed via the following link - **https://github.com/bpavlovs/hometask-project-set-up**
2. Press **"Code"** and copy the SSH link to clipboard
3. Go back to your IDE of choice and open a new terminal (if not open already)
4. Input a git command - **"git clone"** followed by the SSH link you've just copied and press **"Enter"**
5. Enter passphrase (only relelvant if you are using SSH) and wait for the repository to get cloned
6. Once done, navigate to the root folder of the project 
7. While in the project root folder, execute **"yarn"** command in the terminal to set up all dependencies

#### Step 2: Check the structure of this project

Make sure that the project contains the following files and folders:
- **"package.json"** file, containing relevant dependencies
- **"babel.config.cjs"** file, containing babel configuration
- **"js"** folder, containing **"rectangle.js"** file
- **"tests"** folder, containig **"rectangle.test.js"** file
- **".gitignore"** file
- **"yarn.lock"** file
- **"README.md"** file, which you are curently reading

#### Step 3: Check "devDependencies" in "package.json" file

Make sure the dev dependencies look as follows:

```json
  "devDependencies": {
    "@babel/core": "^7.20.2",
    "@babel/preset-env": "^7.20.2",
    "babel-jest": "^29.2.2",
    "jest": "^29.2.2"
  }
```
### Step 4: Time to run tests

Finally, use the **"yarn jest"** command to run tests that are already present in the **"tests"** folder

If everything went smoothly, you should see the following output *(execution time might differ)*:

```text
 PASS  tests/rectangle.test.js
  √ Should calculate perimeter correctly (3 ms)
  √ Should calculate area correctly
  √ Should retrive info correctly

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.718 s, estimated 2 s
Ran all test suites.
```
