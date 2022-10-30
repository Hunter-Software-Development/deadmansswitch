# Dead Man's Switch

to run: docker-compose up -d

localhost:3000

localhost:3030/graphql



docker-compose down; docker-compose build --no-cache; docker-compose up -d;

## Build and push for Docker


docker build -t iamhunter/deadmansswitch:server_production -f ./apps/server/Dockerfile . ;
docker push iamhunter/deadmansswitch:server_production;
docker build -t iamhunter/deadmansswitch:client_production -f ./apps/client/Dockerfile.prod ./apps/client ;
docker push iamhunter/deadmansswitch:client_production;

helm uninstall deadmansswitch;
helm dep build ./helm;
helm install deadmansswitch ./helm;
kubectl get service;
kubectl get po;
kubectl get ing;

docker run -it -p 3000:3000 --rm client_production:latest;
docker exec -it keen_villani sh;

kubectl delete pvc --all;




