#! /bin/bash

if docker ps -aq -f name=jupyter-wiki | grep -P '[a-f0-9]{12}'
then
    xdg-open http://localhost:8888
    echo "Server still running.  If server is not responding, diagnose issue with"
    echo ""
    echo -e "\ttmux attach -t wiki"
    echo ""

    echo "Or you can just kill and restart with"
    echo ""
    echo -e "\tdocker stop jupyter-wiki"
    echo -e "\ttmux kill-session wiki"
    echo -e "\t./run.sh"
    exit
fi

if tmux list-sessions -F '#{session_name}' | grep -q wiki
then
    echo "tmux session still running. Stopping container and killing session"
    docker stop jupyter-wiki
    tmux kill-session -t wiki
fi

tmux new-session -d -s wiki
tmux rename-window -t 0 server-log
tmux send-keys -t 'server-log' './scripts/runcontainer.sh' \
    C-m 'sleep 2' \
    C-m 'xdg-open http://localhost:8080 >/dev/null 2>&1&' \
    C-m 'docker attach jupyter-wiki' \
    C-m

echo "Server running at localhost:8888"
echo "View server output with tmux"
echo ""
echo -e "\ttmux attach -t wiki"
