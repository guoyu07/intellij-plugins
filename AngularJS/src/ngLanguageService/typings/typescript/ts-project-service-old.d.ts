import { ProjectResult } from "./ts-session";
import { HolderContainer } from "./compile-info-holder";
import { DiagnosticsContainer } from "./util";
export declare function extendProjectService(TypeScriptProjectService: typeof ts.server.ProjectService, ts_impl: typeof ts, host: ts.server.ServerHost, projectEmittedWithAllFiles: HolderContainer, projectErrors: DiagnosticsContainer, isVersionTypeScript15: boolean, isVersionTypeScript16: boolean, isVersionTypeScript17: boolean, commonDefaultOptions: any): void;
export declare function copyOptionsWithResolvedFilesWithoutExtensions(host: ts.server.ServerHost, configFileToProjectOptions: ProjectResult, projectService: ts.server.ProjectService, ts_impl: any): ProjectResult;
