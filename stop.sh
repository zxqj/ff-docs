#! /bin/bash

docker stop jupyter-wiki
tmux kill-session -t wiki
