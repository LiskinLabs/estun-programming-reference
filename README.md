# ESTUN Programming Reference Library

A comprehensive, multi-lingual programmer's reference and instruction library for ESTUN Industrial Robots.

![ESTUN](https://img.shields.io/badge/Robotics-ESTUN-blue?style=for-the-badge)
![React](https://img.shields.io/badge/UI-React-blueviolet?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/Lang-TypeScript-blue?style=for-the-badge)

## Overview
This digital library extracts the raw IDE configurations (`configTable.cfg`, `usertable.cfg`) from ESTUN's programming environment and presents them in a beautiful, searchable, and responsive web application. 

### Features:
- **Complete Command Database**: Contains 210 instructions categorized by function (Movement, IO, Logic, Wait, etc.).
- **Multi-lingual Support**: Full descriptions and parameter references in Russian (RU), English (EN), and Turkish (TR).
- **Dark Mode UI**: Designed for industrial programmers with high contrast, code-font parameters, and instant global search.

## 🗄️ Raw Data & Project Backups
All the documentation and logic shown in this app were programmatically extracted from the raw configuration files (`configTable.cfg`, `usertable.cfg`, `inst.lua`) found on the ESTUN controller's internal storage. 

Additionally, we have included real-world project backups inside the `raw_data/Examples_Old_Projects` directory (such as `TestV4_0.er` and `Lasertrajectory.er`). These backups serve as the ultimate truth for how ESTUN `.erd` / `.erp` scripts are structured and written in production environments.

**ESTUN Controller Snapshot (`raw_data/c_drive_backup`)**:
We have also safely backed up the essential configuration files and scripts from the real ESTUN robot C drive (`C:\temp\runtime`). This includes the `lua` API bindings (`robotface_shm.lua`), system configurations (`sysConfig`), translation matrices (`ErrMsg.ts`), and the base robot setup (`sysKeyWord.cfg`, `auxiliary.cfg`). This is extremely useful for advanced debugging and reverse engineering the controller's logic.

## Setup & Local Development

This application is built using Vite + React + TypeScript.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## Deployment
This project is configured to automatically deploy to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on every push to the `main` branch.

---
*Created for Teknorob Robot ve Otomasyon*
