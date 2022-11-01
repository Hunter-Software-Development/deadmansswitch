# Dead Man's Switch

## Running locally through docker-compose

### Make sure all packages are installed

npm update; cd apps/client; npm update; cd ../../;

### Run through docker-compose

docker-compose down;  
docker-compose build --no-cache;  
docker-compose up -d;

### Access here

localhost:3000  
localhost:3030/graphql

## Running locally through Helm

### Build and push for Docker

docker build -t iamhunter/deadmansswitch:server_production -f ./apps/server/Dockerfile . ;
docker push iamhunter/deadmansswitch:server_production;
docker build -t iamhunter/deadmansswitch:client_production -f ./apps/client/Dockerfile.prod ./apps/client ;
docker push iamhunter/deadmansswitch:client_production;

### Install + Run through Helm

helm uninstall deadmansswitch;
helm dep build ./helm;
helm install deadmansswitch ./helm;

### Access helm here

localhost/client  
localhost/server/graphql

#### Quick reference commands

kubectl get service;
kubectl get po;
kubectl get ing;
