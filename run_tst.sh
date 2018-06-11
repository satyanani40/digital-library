#!/bin/bash
kill $(ps aux | grep '[p]ython server.py' | awk '{print $2}')

source activate dl_env
export env_name=dev
cd /home/azbyc/projects/digital-library
git pull origin master
python server.py 
