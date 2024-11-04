# Mobile Project Setup Guide

This guide will help you set up your development environment for a mobile project using Node.js and Expo.

## Prerequisites

- Windows operating system with [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) package manager
- PowerShell or Windows Terminal
- Internet connection

## Installing Node.js using fnm (Fast Node Manager)

[fnm](https://github.com/Schniz/fnm) is a fast and simple Node.js version manager that helps you manage multiple Node.js versions on your system.

### 1. Install fnm

```powershell
winget install Schniz.fnm
```

### 2. Configure fnm Environment

Add fnm to your PowerShell environment:

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```

💡 **Tip**: Add this line to your PowerShell profile to automatically load fnm every time you open PowerShell.

### 3. Install Node.js

Install and use Node.js version 22:

```powershell
fnm use --install-if-missing 22
```

### 4. Verify Installation

Confirm that Node.js and npm are properly installed:

```powershell
node -v  # Should output v22.11.0
npm -v   # Should output 10.9.0
```

## Setting Up Expo

[Expo](https://expo.dev/) is a framework and platform for universal React applications.

### 1. Install Expo CLI

Install Expo CLI globally:

```powershell
npm install -g expo-cli
```

### 2. Start the Development Server

Navigate to your project directory and start the Expo development server:

```powershell
npx expo start
```

#### Optional: Start with Tunnel Connection

If you're having issues with LAN connection or need to access the app from outside your network:

```powershell
npx expo start --tunnel
```

💡 **Note**: The tunnel option creates a secure connection between your development machine and Expo servers, which can be slower than the default LAN connection but more reliable in certain network environments.

## Troubleshooting

- If `fnm` command is not recognized after installation, restart your terminal
- Make sure your system's execution policy allows running scripts
- If you encounter network issues with Expo, try the `--tunnel` option
- For any Expo-related issues, check the [Expo documentation](https://docs.expo.dev/)

## Additional Resources

- [fnm Documentation](https://github.com/Schniz/fnm)
- [Node.js Documentation](https://nodejs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)

## Support

If you encounter any issues during setup, please:
1. Check the troubleshooting section above
2. Consult the relevant documentation
3. Search for similar issues in the project's issue tracker