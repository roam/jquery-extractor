build:
	gjslint jquery.extractor.js
	java -jar $$CLOSURE_COMPILER --js jquery.extractor.js --js_output_file jquery.extractor.min.js