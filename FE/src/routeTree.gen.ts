/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const SearchCarIndexLazyImport = createFileRoute('/searchCar/')()
const SearchCarIdLazyImport = createFileRoute('/searchCar/$id')()
const AdminManufacturesIndexLazyImport = createFileRoute(
  '/admin/manufactures/',
)()
const AdminCarsIndexLazyImport = createFileRoute('/admin/cars/')()
const AdminTypesRoutesTypesLazyImport = createFileRoute(
  '/admin/types-routes/types',
)()
const AdminTypesRoutesCreateLazyImport = createFileRoute(
  '/admin/types-routes/create',
)()
const AdminTypesRoutesIdLazyImport = createFileRoute(
  '/admin/types-routes/$id',
)()
const AdminManufacturesCreateLazyImport = createFileRoute(
  '/admin/manufactures/create',
)()
const AdminManufacturesIdLazyImport = createFileRoute(
  '/admin/manufactures/$id',
)()
const AdminCarsCreateLazyImport = createFileRoute('/admin/cars/create')()
const AdminCarsIdLazyImport = createFileRoute('/admin/cars/$id')()
const AdminTypesRoutesEditIdLazyImport = createFileRoute(
  '/admin/types-routes/edit/$id',
)()
const AdminManufacturesEditIdLazyImport = createFileRoute(
  '/admin/manufactures/edit/$id',
)()
const AdminCarsEditIdLazyImport = createFileRoute('/admin/cars/edit/$id')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SearchCarIndexLazyRoute = SearchCarIndexLazyImport.update({
  id: '/searchCar/',
  path: '/searchCar/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/searchCar/index.lazy').then((d) => d.Route),
)

const SearchCarIdLazyRoute = SearchCarIdLazyImport.update({
  id: '/searchCar/$id',
  path: '/searchCar/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/searchCar/$id.lazy').then((d) => d.Route))

const AdminManufacturesIndexLazyRoute = AdminManufacturesIndexLazyImport.update(
  {
    id: '/admin/manufactures/',
    path: '/admin/manufactures/',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/manufactures/index.lazy').then((d) => d.Route),
)

const AdminCarsIndexLazyRoute = AdminCarsIndexLazyImport.update({
  id: '/admin/cars/',
  path: '/admin/cars/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/cars/index.lazy').then((d) => d.Route),
)

const AdminTypesRoutesTypesLazyRoute = AdminTypesRoutesTypesLazyImport.update({
  id: '/admin/types-routes/types',
  path: '/admin/types-routes/types',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/types-routes/types.lazy').then((d) => d.Route),
)

const AdminTypesRoutesCreateLazyRoute = AdminTypesRoutesCreateLazyImport.update(
  {
    id: '/admin/types-routes/create',
    path: '/admin/types-routes/create',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/types-routes/create.lazy').then((d) => d.Route),
)

const AdminTypesRoutesIdLazyRoute = AdminTypesRoutesIdLazyImport.update({
  id: '/admin/types-routes/$id',
  path: '/admin/types-routes/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/types-routes/$id.lazy').then((d) => d.Route),
)

const AdminManufacturesCreateLazyRoute =
  AdminManufacturesCreateLazyImport.update({
    id: '/admin/manufactures/create',
    path: '/admin/manufactures/create',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/manufactures/create.lazy').then((d) => d.Route),
  )

const AdminManufacturesIdLazyRoute = AdminManufacturesIdLazyImport.update({
  id: '/admin/manufactures/$id',
  path: '/admin/manufactures/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/manufactures/$id.lazy').then((d) => d.Route),
)

const AdminCarsCreateLazyRoute = AdminCarsCreateLazyImport.update({
  id: '/admin/cars/create',
  path: '/admin/cars/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/cars/create.lazy').then((d) => d.Route),
)

const AdminCarsIdLazyRoute = AdminCarsIdLazyImport.update({
  id: '/admin/cars/$id',
  path: '/admin/cars/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/cars/$id.lazy').then((d) => d.Route),
)

const AdminTypesRoutesEditIdLazyRoute = AdminTypesRoutesEditIdLazyImport.update(
  {
    id: '/admin/types-routes/edit/$id',
    path: '/admin/types-routes/edit/$id',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/types-routes/edit/$id.lazy').then((d) => d.Route),
)

const AdminManufacturesEditIdLazyRoute =
  AdminManufacturesEditIdLazyImport.update({
    id: '/admin/manufactures/edit/$id',
    path: '/admin/manufactures/edit/$id',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/manufactures/edit/$id.lazy').then((d) => d.Route),
  )

const AdminCarsEditIdLazyRoute = AdminCarsEditIdLazyImport.update({
  id: '/admin/cars/edit/$id',
  path: '/admin/cars/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/cars/edit/$id.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/searchCar/$id': {
      id: '/searchCar/$id'
      path: '/searchCar/$id'
      fullPath: '/searchCar/$id'
      preLoaderRoute: typeof SearchCarIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/searchCar/': {
      id: '/searchCar/'
      path: '/searchCar'
      fullPath: '/searchCar'
      preLoaderRoute: typeof SearchCarIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/cars/$id': {
      id: '/admin/cars/$id'
      path: '/admin/cars/$id'
      fullPath: '/admin/cars/$id'
      preLoaderRoute: typeof AdminCarsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/cars/create': {
      id: '/admin/cars/create'
      path: '/admin/cars/create'
      fullPath: '/admin/cars/create'
      preLoaderRoute: typeof AdminCarsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufactures/$id': {
      id: '/admin/manufactures/$id'
      path: '/admin/manufactures/$id'
      fullPath: '/admin/manufactures/$id'
      preLoaderRoute: typeof AdminManufacturesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufactures/create': {
      id: '/admin/manufactures/create'
      path: '/admin/manufactures/create'
      fullPath: '/admin/manufactures/create'
      preLoaderRoute: typeof AdminManufacturesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types-routes/$id': {
      id: '/admin/types-routes/$id'
      path: '/admin/types-routes/$id'
      fullPath: '/admin/types-routes/$id'
      preLoaderRoute: typeof AdminTypesRoutesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types-routes/create': {
      id: '/admin/types-routes/create'
      path: '/admin/types-routes/create'
      fullPath: '/admin/types-routes/create'
      preLoaderRoute: typeof AdminTypesRoutesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types-routes/types': {
      id: '/admin/types-routes/types'
      path: '/admin/types-routes/types'
      fullPath: '/admin/types-routes/types'
      preLoaderRoute: typeof AdminTypesRoutesTypesLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/cars/': {
      id: '/admin/cars/'
      path: '/admin/cars'
      fullPath: '/admin/cars'
      preLoaderRoute: typeof AdminCarsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufactures/': {
      id: '/admin/manufactures/'
      path: '/admin/manufactures'
      fullPath: '/admin/manufactures'
      preLoaderRoute: typeof AdminManufacturesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/cars/edit/$id': {
      id: '/admin/cars/edit/$id'
      path: '/admin/cars/edit/$id'
      fullPath: '/admin/cars/edit/$id'
      preLoaderRoute: typeof AdminCarsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufactures/edit/$id': {
      id: '/admin/manufactures/edit/$id'
      path: '/admin/manufactures/edit/$id'
      fullPath: '/admin/manufactures/edit/$id'
      preLoaderRoute: typeof AdminManufacturesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types-routes/edit/$id': {
      id: '/admin/types-routes/edit/$id'
      path: '/admin/types-routes/edit/$id'
      fullPath: '/admin/types-routes/edit/$id'
      preLoaderRoute: typeof AdminTypesRoutesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/searchCar/$id': typeof SearchCarIdLazyRoute
  '/searchCar': typeof SearchCarIndexLazyRoute
  '/admin/cars/$id': typeof AdminCarsIdLazyRoute
  '/admin/cars/create': typeof AdminCarsCreateLazyRoute
  '/admin/manufactures/$id': typeof AdminManufacturesIdLazyRoute
  '/admin/manufactures/create': typeof AdminManufacturesCreateLazyRoute
  '/admin/types-routes/$id': typeof AdminTypesRoutesIdLazyRoute
  '/admin/types-routes/create': typeof AdminTypesRoutesCreateLazyRoute
  '/admin/types-routes/types': typeof AdminTypesRoutesTypesLazyRoute
  '/admin/cars': typeof AdminCarsIndexLazyRoute
  '/admin/manufactures': typeof AdminManufacturesIndexLazyRoute
  '/admin/cars/edit/$id': typeof AdminCarsEditIdLazyRoute
  '/admin/manufactures/edit/$id': typeof AdminManufacturesEditIdLazyRoute
  '/admin/types-routes/edit/$id': typeof AdminTypesRoutesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/searchCar/$id': typeof SearchCarIdLazyRoute
  '/searchCar': typeof SearchCarIndexLazyRoute
  '/admin/cars/$id': typeof AdminCarsIdLazyRoute
  '/admin/cars/create': typeof AdminCarsCreateLazyRoute
  '/admin/manufactures/$id': typeof AdminManufacturesIdLazyRoute
  '/admin/manufactures/create': typeof AdminManufacturesCreateLazyRoute
  '/admin/types-routes/$id': typeof AdminTypesRoutesIdLazyRoute
  '/admin/types-routes/create': typeof AdminTypesRoutesCreateLazyRoute
  '/admin/types-routes/types': typeof AdminTypesRoutesTypesLazyRoute
  '/admin/cars': typeof AdminCarsIndexLazyRoute
  '/admin/manufactures': typeof AdminManufacturesIndexLazyRoute
  '/admin/cars/edit/$id': typeof AdminCarsEditIdLazyRoute
  '/admin/manufactures/edit/$id': typeof AdminManufacturesEditIdLazyRoute
  '/admin/types-routes/edit/$id': typeof AdminTypesRoutesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/searchCar/$id': typeof SearchCarIdLazyRoute
  '/searchCar/': typeof SearchCarIndexLazyRoute
  '/admin/cars/$id': typeof AdminCarsIdLazyRoute
  '/admin/cars/create': typeof AdminCarsCreateLazyRoute
  '/admin/manufactures/$id': typeof AdminManufacturesIdLazyRoute
  '/admin/manufactures/create': typeof AdminManufacturesCreateLazyRoute
  '/admin/types-routes/$id': typeof AdminTypesRoutesIdLazyRoute
  '/admin/types-routes/create': typeof AdminTypesRoutesCreateLazyRoute
  '/admin/types-routes/types': typeof AdminTypesRoutesTypesLazyRoute
  '/admin/cars/': typeof AdminCarsIndexLazyRoute
  '/admin/manufactures/': typeof AdminManufacturesIndexLazyRoute
  '/admin/cars/edit/$id': typeof AdminCarsEditIdLazyRoute
  '/admin/manufactures/edit/$id': typeof AdminManufacturesEditIdLazyRoute
  '/admin/types-routes/edit/$id': typeof AdminTypesRoutesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/register'
    | '/searchCar/$id'
    | '/searchCar'
    | '/admin/cars/$id'
    | '/admin/cars/create'
    | '/admin/manufactures/$id'
    | '/admin/manufactures/create'
    | '/admin/types-routes/$id'
    | '/admin/types-routes/create'
    | '/admin/types-routes/types'
    | '/admin/cars'
    | '/admin/manufactures'
    | '/admin/cars/edit/$id'
    | '/admin/manufactures/edit/$id'
    | '/admin/types-routes/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/register'
    | '/searchCar/$id'
    | '/searchCar'
    | '/admin/cars/$id'
    | '/admin/cars/create'
    | '/admin/manufactures/$id'
    | '/admin/manufactures/create'
    | '/admin/types-routes/$id'
    | '/admin/types-routes/create'
    | '/admin/types-routes/types'
    | '/admin/cars'
    | '/admin/manufactures'
    | '/admin/cars/edit/$id'
    | '/admin/manufactures/edit/$id'
    | '/admin/types-routes/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/register'
    | '/searchCar/$id'
    | '/searchCar/'
    | '/admin/cars/$id'
    | '/admin/cars/create'
    | '/admin/manufactures/$id'
    | '/admin/manufactures/create'
    | '/admin/types-routes/$id'
    | '/admin/types-routes/create'
    | '/admin/types-routes/types'
    | '/admin/cars/'
    | '/admin/manufactures/'
    | '/admin/cars/edit/$id'
    | '/admin/manufactures/edit/$id'
    | '/admin/types-routes/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  SearchCarIdLazyRoute: typeof SearchCarIdLazyRoute
  SearchCarIndexLazyRoute: typeof SearchCarIndexLazyRoute
  AdminCarsIdLazyRoute: typeof AdminCarsIdLazyRoute
  AdminCarsCreateLazyRoute: typeof AdminCarsCreateLazyRoute
  AdminManufacturesIdLazyRoute: typeof AdminManufacturesIdLazyRoute
  AdminManufacturesCreateLazyRoute: typeof AdminManufacturesCreateLazyRoute
  AdminTypesRoutesIdLazyRoute: typeof AdminTypesRoutesIdLazyRoute
  AdminTypesRoutesCreateLazyRoute: typeof AdminTypesRoutesCreateLazyRoute
  AdminTypesRoutesTypesLazyRoute: typeof AdminTypesRoutesTypesLazyRoute
  AdminCarsIndexLazyRoute: typeof AdminCarsIndexLazyRoute
  AdminManufacturesIndexLazyRoute: typeof AdminManufacturesIndexLazyRoute
  AdminCarsEditIdLazyRoute: typeof AdminCarsEditIdLazyRoute
  AdminManufacturesEditIdLazyRoute: typeof AdminManufacturesEditIdLazyRoute
  AdminTypesRoutesEditIdLazyRoute: typeof AdminTypesRoutesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  SearchCarIdLazyRoute: SearchCarIdLazyRoute,
  SearchCarIndexLazyRoute: SearchCarIndexLazyRoute,
  AdminCarsIdLazyRoute: AdminCarsIdLazyRoute,
  AdminCarsCreateLazyRoute: AdminCarsCreateLazyRoute,
  AdminManufacturesIdLazyRoute: AdminManufacturesIdLazyRoute,
  AdminManufacturesCreateLazyRoute: AdminManufacturesCreateLazyRoute,
  AdminTypesRoutesIdLazyRoute: AdminTypesRoutesIdLazyRoute,
  AdminTypesRoutesCreateLazyRoute: AdminTypesRoutesCreateLazyRoute,
  AdminTypesRoutesTypesLazyRoute: AdminTypesRoutesTypesLazyRoute,
  AdminCarsIndexLazyRoute: AdminCarsIndexLazyRoute,
  AdminManufacturesIndexLazyRoute: AdminManufacturesIndexLazyRoute,
  AdminCarsEditIdLazyRoute: AdminCarsEditIdLazyRoute,
  AdminManufacturesEditIdLazyRoute: AdminManufacturesEditIdLazyRoute,
  AdminTypesRoutesEditIdLazyRoute: AdminTypesRoutesEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/register",
        "/searchCar/$id",
        "/searchCar/",
        "/admin/cars/$id",
        "/admin/cars/create",
        "/admin/manufactures/$id",
        "/admin/manufactures/create",
        "/admin/types-routes/$id",
        "/admin/types-routes/create",
        "/admin/types-routes/types",
        "/admin/cars/",
        "/admin/manufactures/",
        "/admin/cars/edit/$id",
        "/admin/manufactures/edit/$id",
        "/admin/types-routes/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/searchCar/$id": {
      "filePath": "searchCar/$id.lazy.jsx"
    },
    "/searchCar/": {
      "filePath": "searchCar/index.lazy.jsx"
    },
    "/admin/cars/$id": {
      "filePath": "admin/cars/$id.lazy.jsx"
    },
    "/admin/cars/create": {
      "filePath": "admin/cars/create.lazy.jsx"
    },
    "/admin/manufactures/$id": {
      "filePath": "admin/manufactures/$id.lazy.jsx"
    },
    "/admin/manufactures/create": {
      "filePath": "admin/manufactures/create.lazy.jsx"
    },
    "/admin/types-routes/$id": {
      "filePath": "admin/types-routes/$id.lazy.jsx"
    },
    "/admin/types-routes/create": {
      "filePath": "admin/types-routes/create.lazy.jsx"
    },
    "/admin/types-routes/types": {
      "filePath": "admin/types-routes/types.lazy.jsx"
    },
    "/admin/cars/": {
      "filePath": "admin/cars/index.lazy.jsx"
    },
    "/admin/manufactures/": {
      "filePath": "admin/manufactures/index.lazy.jsx"
    },
    "/admin/cars/edit/$id": {
      "filePath": "admin/cars/edit/$id.lazy.jsx"
    },
    "/admin/manufactures/edit/$id": {
      "filePath": "admin/manufactures/edit/$id.lazy.jsx"
    },
    "/admin/types-routes/edit/$id": {
      "filePath": "admin/types-routes/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
