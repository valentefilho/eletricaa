# Script PowerShell para conexao e publicacao no GitHub

# 1. Garante a branch principal como main
git branch -M main

# 2. Configura a URL remota (caso nao esteja configurada)
git remote remove origin 2>$null
git remote add origin https://github.com/valentefilho/eletricaa.git

# 3. Realiza o envio (Push) para o GitHub
git push -u origin main
