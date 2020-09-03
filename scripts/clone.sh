#!/usr/bin/env bash

##############################################
# Lay toan bo source code cac modules ve client
##############################################


# eval `ssh-agent -s`
# ssh-add ~/.ssh/cuongnt

# khoi tao bien global: snw_modules
. ./modules.sh

cd ../..
if [ ! -d snw-modules ];
then
    # Control will enter here if $DIRECTORY doesn't exist.
    mkdir -p snw-modules;
    printf "\n==================================\n"
    printf "Tao thu muc snw-modules\n"
else
    printf "\n==================================\n"
    printf "!!! Da ton tai snw-modules\n"
fi
cd snw-modules

count=0
account="tamdn"

if [ ! -z $1 ]
then
    account=$1
fi

for i in "${snw_modules[@]}"; do
    (( count++ ))
    printf "\n==================================\n"
    printf "$count. $i\n"
    git clone ssh://$account@source.bso.bkav.com:29418/$i && scp -p -P 29418 $account@source.bso.bkav.com:hooks/commit-msg $i/.git/hooks/
done
