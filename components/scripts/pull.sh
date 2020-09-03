#!/usr/bin/env bash

# eval `ssh-agent -s`
# ssh-add ~/.ssh/id_rsa

cd ../../snw-modules

find ./* -type d -prune | while read d; do
    cd $d
    git pull origin master
    echo $d
    cd ..
done
