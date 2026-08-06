type Role = "admin" | "editor" | "viewer"

type Permission = {
  canRead: boolean
  canWrite: boolean
  canDelete: boolean
}

const permissions: Record<Role, Permission> = {
  admin: {
    canRead: true,
    canWrite: true,
    canDelete: true,
  },
  editor: {
    canRead: true,
    canWrite: true,
    canDelete: false,
  },
  viewer: {
    canRead: true,
    canWrite: false,
    canDelete: false,
  },
}

console.log(permissions)

/*
Lesson:
Record<K, T> creates an object type with fixed keys and shared value shape.
*/
