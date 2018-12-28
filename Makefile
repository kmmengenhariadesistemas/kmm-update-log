all: s3-send
s3-send: build-prod
	aws s3 sync dist/kmm-update-log/ s3://update.kmm.com.br/
build-prod:
	ng build --prod
serve:
	ng serve --open
