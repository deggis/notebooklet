#!/bin/bash

ssh -v -NL5985:localhost:5984 bebop &
./couchdb &
sleep 3
curl -H "Content-Type: application/json" -X POST http://127.0.0.1:5984/_replicate -d '{"source":"http://127.0.0.1:5985/notebooklet", "target":"notebooklet", "continuous":true}'
sleep 1
curl -H "Content-Type: application/json" -X POST http://127.0.0.1:5984/_replicate -d '{"source":"notebooklet", "target":"http://127.0.0.1:5985/notebooklet","continuous":true}'

