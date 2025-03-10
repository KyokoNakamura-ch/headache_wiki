#!/bin/bash

# 環境の Python の確認
echo "Checking Python version..."
which python3 || echo "Python3 not found"
python3 --version || echo "Python3 version not found"

# Python 仮想環境の作成
echo "Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate  # Linux/Macの場合
# source venv/Scripts/activate  # Windowsの場合（VercelはLinux環境なので上はOK）

# pip のインストールとアップグレード
echo "Ensuring pip is installed..."
python3 -m ensurepip --default-pip
python3 -m pip install --upgrade pip || echo "Pip installation failed"

# pip が使えるか確認
python3 -m pip --version || echo "Pip is still not found"

# 依存関係のインストール（仮想環境内で）
python3 -m pip install -r requirements.txt || echo "Dependency installation failed"

# MkDocs のビルド（仮想環境内で）
python3 -m mkdocs build || echo "MkDocs build failed"

# 仮想環境の終了
deactivate




