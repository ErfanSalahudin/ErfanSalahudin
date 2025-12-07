.PHONY: build run stop clean dev test

build:
	docker-compose build

run:
	docker-compose up

run-detached:
	docker-compose up -d

stop:
	docker-compose down

clean:
	docker-compose down -v --rmi all

dev:
	npm run dev

test:
	npm run test
