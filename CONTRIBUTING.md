## Code Quality Rubric

| Score | Out of  | Rubric Item                                                                       |
|-------|:-------:|-----------------------------------------------------------------------------------|
|       | 10      | CONTRIBUTING.md file makes it easy for new dev to get it running on localhost     |
|       | 5       | It runs                                                                           |
|       | 5       | It runs in production [on Heroku]                                                 |
|       | 3       | Good, professional commit messages and git trees                                  |
|       | 10      | Gets at least a [3.0 GPA] on CodeClimate                                          |
|       | 20      | Has at least [70%] test coverage as reported by CodeClimate, no specs fail        |
|       | 15      | It gets no errors from [StandardJS] linter                                        |
|       | 10      | Files, functions, variables, CSS classes/ids have clear names                     |
|       | 10      | No giant functions                                                                |
|       | 5       | Good file organization - new developers can quickly find and create files         |
|       | 5       | Comments only when truly necessary, such as pointing out a temporary hack)        |

## Setting up your localhost

No database required
```
  [tab 1] npm install
  [tab 1] npm run buildwatch

  [tab 2] npm start

  [tab 3] npm test
```

