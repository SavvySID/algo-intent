# Algo Intent - User Interface

Algo Intent is a dual-experience project for the Algorand ecosystem:

- **A conversational, AI-powered Telegram bot** to manage wallets, transfer ALGO, mint/transfer NFTs, and more.
- **A modern web app** (Vite + React + TypeScript + Tailwind) named algointent that brings similar intent-driven actions to the browser with wallet connectivity and a swap widget.

Both experiences share the same vision: describe what you want to do in plain English, and let the system translate that into secure Algorand transactions.

## 🎯 Project Overview

This repository contains the **user interface code for Algo Intent** - a modern, responsive web application that provides an intuitive interface for interacting with the Algorand blockchain through natural language commands.

## ✨ Features

- **AI-Powered Transaction Interface**: Describe your Algorand transaction intent in plain English
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes for optimal viewing experience
- **Real-time Chat Interface**: Interactive conversation flow for transaction guidance
- **Wallet Integration Ready**: Prepared for Algorand wallet connectivity
- **Swap Widget Integration**: Built-in support for token swapping functionality

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Theme Management**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd AlgoIntentUI
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in your terminal)

## 🎨 Design System

The application uses a carefully crafted design system with:

- **Algorand Brand Colors**: Teal and blue gradients inspired by Algorand's branding
- **Consistent Spacing**: Tailwind's spacing scale for uniform layouts
- **Typography**: Clean, readable fonts optimized for both light and dark themes
- **Animations**: Subtle animations for enhanced user experience
- **Accessibility**: WCAG compliant components and interactions

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment.

## 🔗 Integration

This UI is designed to integrate with:

- **Algorand Wallet Adapter**: For wallet connectivity
- **Algorand SDK**: For blockchain interactions
- **AI Backend Services**: For natural language processing
- **Swap Widget APIs**: For token exchange functionality

**Algo Intent** - Making Algorand transactions as simple as describing what you want to do.
