.PHONY: test
test: ## Run both library tests and component tests.
	make test-lib
	make test-components

.PHONY: test-lib
test-lib: ## Run just library tests (no Webpack involved).
	npx mocha --require ts-node/register src/lib/**/*.test.ts

.PHONY: test-components
test-components: ## Run just component tests (uses webpack.test.config.js).
	npx mochapack --webpack-config=./webpack.test.config.js --mode=development src/components/**/*.test.tsx

.PHONY: run
run: ## Run the dev server.
	npx webpack-dev-server \
		--mode=development

.PHONY: build
build: ## Run a production build.
	npx webpack \
		--mode=production

.PHONY: fmt
fmt: ## Auto-format the codebase.
	# Write new formatting in place.
	# Don't format package*.json because npm likes to format that.
	npx prettier \
		--write \
		'./**/*.{css,html,js,json,md,scss,ts,tsx,yml,yaml}' \
		'!./**/dist/**' \
		'!./package*.json'

# Stolen from: https://news.ycombinator.com/item?id=11201604
.DEFAULT_GOAL := help
.PHONY: help
help:
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
		 }' $(MAKEFILE_LIST)