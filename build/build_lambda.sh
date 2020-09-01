# Exit on Error
set -e

# Copy package.json file
cp package.json dist/

# Install dependencies
cd dist/
npm install --only=prod

# Zip dependency
zip -r function.zip .
# Ship package
aws lambda update-function-code --function-name core-service --zip-file fileb://function.zip