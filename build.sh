#!/bin/bash

# 環境の Python と pip を確認
echo "Checking Python version..."
python3 --version || echo "Python3 not found"

echo "Checking pip version..."
python3 -m ensurepip --default-pip
python3 -m pip --version || echo "Pip not found"

# pip をアップグレード
python3 -m pip install --upgrade pip

# 依存関係をインストール
python3 -m pip install -r requirements.txt

# MkDocs をビルド
mkdocs build

