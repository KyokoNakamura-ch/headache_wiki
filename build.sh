#!/bin/bash

# Python のパスを確認
echo "Checking Python version..."
which python3 || echo "Python3 not found"
python3 --version || echo "Python3 version not found"

# pip のインストールとアップグレード
echo "Ensuring pip is installed..."
python3 -m ensurepip --default-pip
python3 -m pip install --upgrade pip || echo "Pip installation failed"

# pip が使えるか確認
python3 -m pip --version || echo "Pip is still not found"

# 依存関係のインストール
python3 -m pip install -r requirements.txt || echo "Dependency installation failed"

# MkDocs のビルド
mkdocs build || echo "MkDocs build failed"


