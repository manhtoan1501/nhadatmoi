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
    rm $(pwd)/SNWClient/node_modules/$i/lib
    mv $(pwd)/snw-modules/$i/.babelrc_orig $(pwd)/snw-modules/$i/.babelrc
    mv $(pwd)/SNWClient/node_modules/$i/lib_orig $(pwd)/SNWClient/node_modules/$i/lib
    printf "\n"
done
