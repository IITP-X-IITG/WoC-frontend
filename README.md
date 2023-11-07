# WoC-frontend
Live at [codepeak.tech](https://www.codepeak.tech/)
# Set up and run(docker)
## Dev environment
```bash
cd bin/
chmod +x ./deploy.sh
./deploy.sh dev up
```
It will take some time for first run. The website will be available on localhost:3000 (make sure the port is not blocked)

To remove the dev environment, run
```bash
cd bin/
./deploy.sh dev down
```

## Production environment
```bash
cd bin/
chmod +x ./deploy.sh
./deploy.sh prod up
```
The website will be available at localhost:8000 (make sure the port is not blocked)

To remove the prod environment, run
```bash
cd bin/
./deploy.sh prod down
```
