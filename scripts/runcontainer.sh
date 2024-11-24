docker run 
	--detach \
	--rm \
	-p 8888:8888 \
	-v /tmp/.X11-unix/:/tmp/.X11-unix \
    -e DISPLAY=$DISPLAY
	-v .:/home/jovyan/work \
	--name jupyter-wiki \
    -h jupyter-wiki
	-w /home/joyvan/work \
    ptrk/terjupy:latest \
    jupyter lab --ServerApp.token=''