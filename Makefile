build: node_modules builddir
	@./node_modules/.bin/duo --stdout index.js > build/build.js

tests: node_modules builddir
	@./node_modules/.bin/duo --stdout test/index.js > build/test.js

node_modules:
	npm install

builddir:
	mkdir -p ./build
clean:
	rm -fr ./build ./components ./node_modules

test: tests
	@./node_modules/.bin/duo-test -c "make tests" -B build/test.js browser

.PHONY: clean test build
