# Use official TestCafe image
FROM testcafe/testcafe:latest

WORKDIR /tests

COPY package*.json ./
COPY tests/ ./tests
COPY pages/ ./pages

RUN npm ci

RUN mkdir -p /tests/reports/screenshots /tests/reports/videos \
  && chmod -R 777 /tests/reports

ENTRYPOINT ["testcafe"]
