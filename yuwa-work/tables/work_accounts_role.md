# `work_accounts_role`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | YES |  | NULL |  |  |
| role_id | int | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| role_id | role_id | no | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| role_id | `work_roles.id` | work_accounts_role_ibfk_1 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "gtw_user_id": 63,
    "role_id": 2
  },
  {
    "id": 2,
    "gtw_user_id": 64,
    "role_id": 2
  },
  {
    "id": 3,
    "gtw_user_id": 253,
    "role_id": 2
  },
  {
    "id": 4,
    "gtw_user_id": 23,
    "role_id": 5
  },
  {
    "id": 5,
    "gtw_user_id": 227,
    "role_id": 5
  },
  {
    "id": 6,
    "gtw_user_id": 256,
    "role_id": 5
  },
  {
    "id": 7,
    "gtw_user_id": 61,
    "role_id": 6
  },
  {
    "id": 8,
    "gtw_user_id": 60,
    "role_id": 6
  }
]
```
