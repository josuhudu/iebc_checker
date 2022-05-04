# IEBC CHECKER

[![N|IEBC](https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/271650965_269808125250905_8855227147539816610_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PbipQTMgOSIAX-ZF1AG&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&oh=00_AT8B8RLpjAd5EsXAHML_kkVzEgHBZF57deUr4X0Idqrh-Q&oe=62787BF4)](https://www.iebc.or.ke)

Uility for checking the availability of https://www.iebc.or.ke

## How it works

IEBC Checker works by visting the IEBC website and returning the status code. The status is checked and an appropriate sound is played to indicate wether the websites is running correctly or is down.

The frequency is set to 30 seconds but can be adjusted. The website can also be adjusted if you wish to check from https://www.iebc.or.ke

## System requirements

This system was tested in windows 10.

## Installation

First let's install the required dependencies
```
npm install
```

And then run
```
node index.js
```

The the config file is at `.env`. The required parameters are `URL` and `INTERVAL`. You can see a list of the available options further down. The most basic config would look like this:
```
URL="https://www.iebc.or.ke"
INTERVAL="30000"
```

## Configuration options

|   option                  | default   | description                                       |
| -----------------------   | --------- | ------------------------------------------------- |
|   URL                     |    ""     | The URL to check. Should include the http / https |
|   INTERVAL                |    ""     | The interval in miliseconds to wesbite            |

## Tech

IEBC CHECKER uses a number of projects to work properly:

- [Node.js] - is a JavaScript runtime
- [dotenv] - loads environment variables from a .env file
- [axios] - Markdown parser done right. Fast and easy to extend.
- [PowerShell] - PowerShell is a cross-platform task automation solution

[Node.js]: <https://nodejs.org/en/>
[dotenv]: <https://github.com/motdotla/dotenv#readme>
[axios]: <https://axios-http.com/docs/intro>
[PowerShell]: <https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2>
