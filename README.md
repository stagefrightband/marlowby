### Steps for Local Deployment
**Prerequisites:**
* Node.js - <ins>Version 24</ins>: https://nodejs.org/en/download
* Git: https://git-scm.com/install/windows
1. Clone this GitHub Repository.
   ```sh
   git clone https://github.com/stagefrightband/marlowby.git
   cd marlowby
   ```
   
2. Download **pnpm**.
   ```sh
   npx get-pnpm
   ```
   
3. Install the packages needed.
   ```sh
   pnpm install
   ```

4. Start a build.\
   \
   To start a <ins>**development**</ins> build:
   ```sh
   pnpm dev
   ```
   
   To start a <ins>**production**</ins> build:
   ```sh
   pnpm build
   pnpm start
   ```
6. View the application at: http://localhost:3000
