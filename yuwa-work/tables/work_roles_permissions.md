# `work_roles_permissions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| role_id | int | NO | MUL | 1 |  |  |
| permission_id | int | NO | MUL | 1 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| permission_id | permission_id | no | 1 |
| PRIMARY | id | yes | 1 |
| role_id | role_id | no | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| role_id | `work_roles.id` | work_roles_permissions_ibfk_1 |
| permission_id | `work_permissions.id` | work_roles_permissions_ibfk_2 |

## Sample rows (8)

```json
[
  {
    "id": 4,
    "role_id": 5,
    "permission_id": 1
  },
  {
    "id": 7,
    "role_id": 5,
    "permission_id": 2
  },
  {
    "id": 8,
    "role_id": 5,
    "permission_id": 5
  },
  {
    "id": 12,
    "role_id": 5,
    "permission_id": 8
  },
  {
    "id": 13,
    "role_id": 5,
    "permission_id": 3
  },
  {
    "id": 15,
    "role_id": 5,
    "permission_id": 9
  },
  {
    "id": 17,
    "role_id": 5,
    "permission_id": 10
  },
  {
    "id": 19,
    "role_id": 5,
    "permission_id": 11
  }
]
```
