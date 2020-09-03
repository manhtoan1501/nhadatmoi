#!/usr/bin/env bash

############################################################################
# Tao soft link tro sang thu mục source code that trong qua trinh phat trien
############################################################################

. ./modules.sh

cd ../../

printf "Dam bao 2 thu muc sau nam dong cap: SNWClient va snw-modules\n"
printf "Thu muc hien tai: $(pwd)\n"
printf "Chuyen ra ngoai: $(pwd)\n"
# pwd Thư muc hien tai

count=0
for i in "${snw_modules[@]}"; do
    (( count++ ))
    echo "$count. $i"
    if [ -f $(pwd)/snw-modules/$i/.babelrc ] # Têp tồn lại và không phải thư mục
    	then mv $(pwd)/snw-modules/$i/.babelrc $(pwd)/snw-modules/$i/.babelrc_orig # Di chuyen .babelrc thanh .babelrc_orig 
    fi
    	mv $(pwd)/SNWClient/node_modules/$i/lib $(pwd)/SNWClient/node_modules/$i/lib_orig # Chuyen file lib thanh file lib_orig 
    	ln -s $(pwd)/snw-modules/$i/src $(pwd)/SNWClient/node_modules/$i/lib # -s file: Tệp không trống, chuyen file src thanh lib
    	printf "---------------da xong\n -------------------------";
done

