#!/usr/bin/env bash

############################################################################
# Tao soft link tro sang thu mục source code that trong qua trinh phat trien
############################################################################

. ./modules.sh

cd ../../

printf "Dam bao 2 thu muc sau nam dong cap: SNWClient va snw-modules\n"
printf "Thu muc hien tai: $(pwd)\n"
printf "Chuyen ra ngoai: $(pwd)\n"
count=0
for i in "${snw_modules[@]}"; do
    (( count++ ))
    printf "$count. $i\n"
    if [ -f $(pwd)/snw-modules/$i/.babelrc ]
    then
        mv $(pwd)/snw-modules/$i/.babelrc $(pwd)/snw-modules/$i/.babelrc_orig
    fi
    mv $(pwd)/SNWClient/node_modules/$i/lib $(pwd)/SNWClient/node_modules/$i/lib_orig
    ln -s $(pwd)/snw-modules/$i/src $(pwd)/SNWClient/node_modules/$i/lib
    printf "\n"
done
