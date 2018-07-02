cd /home/ubuntu/projects
source miniconda2/bin/activate
cd digital-library
gunicorn --bind 0:8080 --timeout 1000 server:app --env env_name=tst
