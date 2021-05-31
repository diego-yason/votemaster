cd ..

mv tsconfig.json res
mv res/tsconfig-start.json tsconfig.json

tsc

mv tsconfig.json res/tsconfig-start.json
mv res/tsconfig.json .