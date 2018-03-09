cd /root
source activate dl_env
cd funky-style
gunicorn --bind 0:8000 --timeout 1000 server:app --env env_name=tst
