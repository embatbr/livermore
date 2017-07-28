# Livermore

Bitcoin trading system. Designed to analyse data from Bitstamp and Foxbit.

## Architecture

The project is divided in three main independent parts, shown in temporal order:

1. Collection
2. Ingestion
3. Analysis

### 1. Collection

Acquires data (trades and orders) from exchanges, through REST APIs, websockets or other mode. The data is packed and sent to a message queue service. Written in NodeJS. More [here](collection/).

### 2. Ingestion

Fetches data collected by collectors and sent to the message queue service. The data is refined and inserted into a database. Written in NodeJS. More [here](ingestion/).

### 3. Analysis

Reads the settled data and executes analyses. Written in Python. More [here](analysis/).
