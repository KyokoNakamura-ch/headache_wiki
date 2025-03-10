#!/bin/bash

# Ensure pip is installed and upgraded
python3 -m pip install --upgrade pip

# Install dependencies
pip3 install -r requirements.txt

# Build the site
mkdocs build
