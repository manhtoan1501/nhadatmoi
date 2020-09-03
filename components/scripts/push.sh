#!/usr/bin/env bash

# eval `ssh-agent -s`
# ssh-add ~/.ssh/id_rsa

cd ../../snw-modules

find ./* -type d -prune | while read d; do
    cd $d
    git add --all
    git commit -a
    git pull origin master
    git push origin HEAD:refs/for/master
    echo $d
    cd ..
done
