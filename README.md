Prerequisites

Windows operating system with winget package manager
PowerShell or Windows Terminal
Internet connection

Installing Node.js using fnm (Fast Node Manager)
fnm is a fast and simple Node.js version manager that helps you manage multiple Node.js versions on your system.
1. Install fnm
powershellCopywinget install Schniz.fnm
2. Configure fnm Environment
Add fnm to your PowerShell environment:
powershellCopyfnm env --use-on-cd | Out-String | Invoke-Expression
💡 Tip: Add this line to your PowerShell profile to automatically load fnm every time you open PowerShell.
3. Install Node.js
Install and use Node.js version 22:
powershellCopyfnm use --install-if-missing 22
4. Verify Installation
Confirm that Node.js and npm are properly installed:
powershellCopynode -v  # Should output v22.11.0
npm -v   # Should output 10.9.0
Setting Up Expo
Expo is a framework and platform for universal React applications.
1. Install Expo CLI
Install Expo CLI globally:
powershellCopynpm install -g expo-cli
2. Start the Development Server
Navigate to your project directory and start the Expo development server:
powershellCopynpx expo start
Optional: Start with Tunnel Connection
If you're having issues with LAN connection or need to access the app from outside your network:
powershellCopynpx expo start --tunnel
💡 Note: The tunnel option creates a secure connection between your development machine and Expo servers, which can be slower than the default LAN connection but more reliable in certain network environments.
