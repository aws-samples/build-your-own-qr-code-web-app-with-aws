# Build Your Own QR Code Web App with Amazon Web Services

## Description:
This code is used alongside the AWS workshop called Build Your Own QR Code Web App with Amazon Web Services. It was built to be presented at the 2022 Grace Hopper Celebration of Women and Nonbinary technologists.

Workshop steps can be found [here](Build Your Own QR Code Web App with Amazon Web Services)

## Initial Local Setup:

Local set up is not required for the workshop, but in order to run this app locally you will need to download the following tools

NVM:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
```

Node:
```bash
nvm install node
```

## Directories

#### Infrastructure:
The infrastructure directory contains the code we use with AWS Lambda. It is designed to take the proxied GET/PUT requests and manipulate items in an Amazon Dynamodb database accordingly.

#### Src:
The source directory contains all files for our React web app that we host on an S3 bucket. THe workshop will describe how to host the file in detail.


## Locally Build Web App
To build and run the website locally you can navigate to the root directory of the project and execute the following commands:

```bash
npm install
npm run build 
npm start 
```


## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

