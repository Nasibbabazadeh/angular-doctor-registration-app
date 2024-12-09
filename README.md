# DoctorManageApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested 
way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated read-package-json@7.0.1: This package is no longer supported. Please use @npmcli/package-json instead.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn cleanup Failed to remove some directories [
npm warn cleanup   [
npm warn cleanup     '\\\\?\\D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules',
npm warn cleanup     [Error: EBUSY: resource busy or locked, rmdir 'D:\D&S\nababazade\Desktop\angular-project\node_modules\esbuild\lib'] {
npm warn cleanup       errno: -4082,
npm warn cleanup       code: 'EBUSY',
npm warn cleanup       syscall: 'rmdir',
npm warn cleanup       path: 'D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\esbuild\\lib'
npm warn cleanup     }
npm warn cleanup   ],
npm warn cleanup   [
npm warn cleanup     '\\\\?\\D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\esbuild',
npm warn cleanup     [Error: EBUSY: resource busy or locked, rmdir 'D:\D&S\nababazade\Desktop\angular-project\node_modules\esbuild\lib'] {
npm warn cleanup       errno: -4082,
npm warn cleanup       code: 'EBUSY',
npm warn cleanup       syscall: 'rmdir',
npm warn cleanup       path: 'D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\esbuild\\lib'
npm warn cleanup     }
npm warn cleanup   ],
npm warn cleanup   [
npm warn cleanup     '\\\\?\\D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\@babel',
npm warn cleanup     [Error: EPERM: operation not permitted, rmdir 'D:\D&S\nababazade\Desktop\angular-project\node_modules\@babel'] {
npm warn cleanup       errno: -4048,
npm warn cleanup       code: 'EPERM',
npm warn cleanup       syscall: 'rmdir',
npm warn cleanup       path: 'D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\@babel'
npm warn cleanup     }
npm warn cleanup   ],
npm warn cleanup   [
npm warn cleanup     '\\\\?\\D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\@angular\\compiler',
npm warn cleanup     [Error: EPERM: operation not permitted, rmdir 'D:\D&S\nababazade\Desktop\angular-project\node_modules\@angular\compiler\esm2022\src\template'] {
npm warn cleanup       errno: -4048,
npm warn cleanup       code: 'EPERM',
npm warn cleanup       syscall: 'rmdir',
npm warn cleanup       path: 'D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\@angular\\compiler\\esm2022\\src\\template'
npm warn cleanup     }
npm warn cleanup   ],
npm warn cleanup   [
npm warn cleanup     '\\\\?\\D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\karma-jasmine',
npm warn cleanup     [Error: EPERM: operation not permitted, rmdir 'D:\D&S\nababazade\Desktop\angular-project\node_modules\karma-jasmine\node_modules\jasmine-core\lib\jasmine-core\example'] {
npm warn cleanup       errno: -4048,
npm warn cleanup       code: 'EPERM',
npm warn cleanup       syscall: 'rmdir',
npm warn cleanup       path: 'D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\karma-jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\example'
npm warn cleanup     }
npm warn cleanup   ]
npm warn cleanup ]
npm error code 1
npm error path D:\D&S\nababazade\Desktop\angular-project\node_modules\vite\node_modules\esbuild
npm error command failed
npm error command C:\windows\system32\cmd.exe /d /s /c node install.js
npm error node:internal/errors:983
npm error   const err = new Error(message);
npm error               ^
npm error
npm error Error: Command failed: C:\Program Files\nodejs\node.exe D:\D&S\nababazade\Desktop\angular-project\node_modules\vite\node_modules\esbuild\bin\esbuild --version
npm error node:child_process:929
npm error     throw err;
npm error     ^
npm error
npm error <ref *1> Error: spawnSync D:\D&S\nababazade\Desktop\angular-project\node_modules\vite\node_modules\@esbuild\win32-x64\esbuild.exe UNKNOWN  
npm error     at Object.spawnSync (node:internal/child_process:1124:20)
npm error     at spawnSync (node:child_process:876:24)
npm error     at Object.execFileSync (node:child_process:919:15)
npm error     at Object.<anonymous> (D:\D&S\nababazade\Desktop\angular-project\node_modules\vite\node_modules\esbuild\bin\esbuild:221:28)
npm error     at Module._compile (node:internal/modules/cjs/loader:1546:14)
npm error     at Module._extensions..js (node:internal/modules/cjs/loader:1691:10)
npm error     at Module.load (node:internal/modules/cjs/loader:1317:32)
npm error     at Module._load (node:internal/modules/cjs/loader:1127:12)
npm error     at TracingChannel.traceSync (node:diagnostics_channel:315:14)
npm error     at wrapModuleLoad (node:internal/modules/cjs/loader:217:24) {
npm error   errno: -4094,
npm error   code: 'UNKNOWN',
npm error   syscall: 'spawnSync D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\vite\\node_modules\\@esbuild\\win32-x64\\esbuild.exe',  
npm error   path: 'D:\\D&S\\nababazade\\Desktop\\angular-project\\node_modules\\vite\\node_modules\\@esbuild\\win32-x64\\esbuild.exe',
npm error   spawnargs: [ '--version' ],
npm error   error: [Circular *1],
npm error   status: null,
npm error   signal: null,
npm error   output: null,
npm error   pid: 0,
npm error   stdout: null,
npm error   stderr: null
npm error }
npm error
npm error Node.js v22.7.0
npm error
npm error     at genericNodeError (node:internal/errors:983:15)
npm error     at wrappedFn (node:internal/errors:537:14)
npm error     at checkExecSyncError (node:child_process:890:11)
npm error     at Object.execFileSync (node:child_process:926:15)
npm error     at validateBinaryVersion (D:\D&S\nababazade\Desktop\angular-project\node_modules\vite\node_modules\esbuild\install.js:99:28)
npm error     at D:\D&S\nababazade\Desktop\angular-project\node_modules\vite\node_modules\esbuild\install.js:284:5 {
npm error   status: 1,
npm error   signal: null,
npm error   output: [
npm error     null,
npm error     Buffer(0) [Uint8Array] [],
npm error     Buffer(1359) [Uint8Array] [
npm error       110, 111, 100, 101,  58,  99, 104, 105, 108, 100,  95, 112,
npm error       114, 111,  99, 101, 115, 115,  58,  57,  50,  57,  13,  10,
npm error        32,  32,  32,  32, 116, 104, 114, 111, 119,  32, 101, 114,
npm error       114,  59,  13,  10,  32,  32,  32,  32,  94,  13,  10,  13,
npm error        10,  60, 114, 101, 102,  32,  42,  49,  62,  32,  69, 114,
npm error       114, 111, 114,  58,  32, 115, 112,  97, 119, 110,  83, 121,
npm error       110,  99,  32,  68,  58,  92,  68,  38,  83,  92, 110,  97,
npm error        98,  97,  98,  97, 122,  97, 100, 101,  92,  68, 101, 115,
npm error       107, 116, 111, 112,
npm error       ... 1259 more items
npm error     ]
npm error   ],
npm error   pid: 25880,
npm error   stdout: Buffer(0) [Uint8Array] [],
npm error   stderr: Buffer(1359) [Uint8Array] [
npm error     110, 111, 100, 101,  58,  99, 104, 105, 108, 100,  95, 112,
npm error     114, 111,  99, 101, 115, 115,  58,  57,  50,  57,  13,  10,
npm error      32,  32,  32,  32, 116, 104, 114, 111, 119,  32, 101, 114,
npm error     114,  59,  13,  10,  32,  32,  32,  32,  94,  13,  10,  13,
npm error      10,  60, 114, 101, 102,  32,  42,  49,  62,  32,  69, 114,
npm error     114, 111, 114,  58,  32, 115, 112,  97, 119, 110,  83, 121,
npm error     110,  99,  32,  68,  58,  92,  68,  38,  83,  92, 110,  97,
npm error      98,  97,  98,  97, 122,  97, 100, 101,  92,  68, 101, 115,


    
npm error     107, 116, 111, 112,
npm error     ... 1259 more items
npm error   ]
npm error }
npm error
npm error Node.js v22.7.0
npm error A complete log of this run can be found in: C:\Users\nababazade\AppData\Local\npm-cache\_logs\2024-12-09T07_14_13_872Z-debug-0.log
