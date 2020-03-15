const dev = {
  STRIPE_KEY: "pk_test_Bj5RnY1uXo0aHRJLwloPkGww003LyYBZwk",
  s3: {
    REGION: "us-east-2",
    BUCKET: "note-app-uploadsserverlesstutorial"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "Yhttps://xu8mq2xqg8.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_76tv3LSGK",
    APP_CLIENT_ID: "63dvpt4pse9998qbnogsdg04hq",
    IDENTITY_POOL_ID: "us-east-2:1a5fb9c2-ce74-4bb7-afc6-7816879262b1"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_Bj5RnY1uXo0aHRJLwloPkGww003LyYBZwk",
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};