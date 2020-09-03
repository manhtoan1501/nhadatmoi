#!/usr/bin/env bash

snw_modules=(
 snw-base-notification-comp
 snw-annc-group-comp
 snw-base-dockCard-comp
 snw-feed-comp
 snw-manager-comp
 snw-management-comp
)

cd ../../

count=0

printf "\nStep 1 : install node_modules for project lost style 'antd'\n"

for i in "${snw_modules[@]}"; do
    if [ -f $(pwd)/snw-modules/$i/.babelrc_orig ]
    printf "\n==================================\n"
    (( count++ ))
    printf "$count. $i\n"
    then
        $(cd $(pwd)/snw-modules/$i ; npm run install:local)
        cp $(pwd)/snw-modules/$i/.babelrc_orig $(pwd)/snw-modules/$i/.babelrc
        rm $(pwd)/snw-modules/$i/package-lock.json
    fi
done

printf "\nStep 2 : Change "src" to "lib" in package.json -> module: mindmup-mapjs\n"

printf "\nStep 3 : cd to project SNWClient and run script \n 1: 'npm run build' (build app for BKAV) \n 2: 'npm run build:hcdt' (build app for HCDT) \n"
