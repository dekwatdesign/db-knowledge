# `work_roles`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | YES |  | NULL |  |  |
| color_class | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "title": "No Role",
    "color_class": "secondary"
  },
  {
    "id": 2,
    "title": "Super Admin",
    "color_class": "rainbow"
  },
  {
    "id": 3,
    "title": "Leader",
    "color_class": "danger"
  },
  {
    "id": 4,
    "title": "Staff",
    "color_class": "primary"
  },
  {
    "id": 5,
    "title": "HR",
    "color_class": "primary"
  },
  {
    "id": 6,
    "title": "Plan",
    "color_class": "primary"
  },
  {
    "id": 7,
    "title": "Finance",
    "color_class": "info"
  },
  {
    "id": 8,
    "title": "LAB",
    "color_class": "info"
  }
]
```
