#!/bin/bash

# 環境の Python の確認
echo "Checking Python version..."
which python3 || echo "Python3 not found"
python3 --version || echo "Python3 version not found"

# pip のインストールとアップグレード
echo "Ensuring pip is installed..."
python3 -m ensurepip --default-pip
python3 -m pip install --upgrade pip || echo "Pip installation failed"

# pip が使えるか確認
python3 -m pip --version || echo "Pip is still not found"

# 依存関係のインストール（pip → python3 -m pip に変更）
python3 -m pip install -r requirements.txt || echo "Dependency installation failed"

# MkDocs のビルド
python3 -m mkdocs build || echo "MkDocs build failed"



