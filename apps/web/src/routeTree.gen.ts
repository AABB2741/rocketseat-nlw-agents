/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './app/__root'
import { Route as IndexRouteImport } from './app/index'
import { Route as RoomsIndexRouteImport } from './app/rooms/index'
import { Route as RoomsIdIndexRouteImport } from './app/rooms/$id/index'
import { Route as RoomsIdAudioRouteImport } from './app/rooms/$id/audio'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const RoomsIndexRoute = RoomsIndexRouteImport.update({
  id: '/rooms/',
  path: '/rooms/',
  getParentRoute: () => rootRouteImport,
} as any)
const RoomsIdIndexRoute = RoomsIdIndexRouteImport.update({
  id: '/rooms/$id/',
  path: '/rooms/$id/',
  getParentRoute: () => rootRouteImport,
} as any)
const RoomsIdAudioRoute = RoomsIdAudioRouteImport.update({
  id: '/rooms/$id/audio',
  path: '/rooms/$id/audio',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/rooms': typeof RoomsIndexRoute
  '/rooms/$id/audio': typeof RoomsIdAudioRoute
  '/rooms/$id': typeof RoomsIdIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/rooms': typeof RoomsIndexRoute
  '/rooms/$id/audio': typeof RoomsIdAudioRoute
  '/rooms/$id': typeof RoomsIdIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/rooms/': typeof RoomsIndexRoute
  '/rooms/$id/audio': typeof RoomsIdAudioRoute
  '/rooms/$id/': typeof RoomsIdIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/rooms' | '/rooms/$id/audio' | '/rooms/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/rooms' | '/rooms/$id/audio' | '/rooms/$id'
  id: '__root__' | '/' | '/rooms/' | '/rooms/$id/audio' | '/rooms/$id/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RoomsIndexRoute: typeof RoomsIndexRoute
  RoomsIdAudioRoute: typeof RoomsIdAudioRoute
  RoomsIdIndexRoute: typeof RoomsIdIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/rooms/': {
      id: '/rooms/'
      path: '/rooms'
      fullPath: '/rooms'
      preLoaderRoute: typeof RoomsIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/rooms/$id/': {
      id: '/rooms/$id/'
      path: '/rooms/$id'
      fullPath: '/rooms/$id'
      preLoaderRoute: typeof RoomsIdIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/rooms/$id/audio': {
      id: '/rooms/$id/audio'
      path: '/rooms/$id/audio'
      fullPath: '/rooms/$id/audio'
      preLoaderRoute: typeof RoomsIdAudioRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RoomsIndexRoute: RoomsIndexRoute,
  RoomsIdAudioRoute: RoomsIdAudioRoute,
  RoomsIdIndexRoute: RoomsIdIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
