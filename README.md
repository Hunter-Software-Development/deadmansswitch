# Dead Man's Switch

to run: docker-compose up -d

localhost:3000
localhost:3030/graphql

 docker-compose stop; docker-compose rm -f; docker-compose build --no-cache; docker-compose up -d;

 docker build --target production -t server_production -f ./apps/server/Dockerfile .

 helm uninstall deadmansswitch; helm install deadmansswitch ./helm; kubectl get po;