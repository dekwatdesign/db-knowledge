# `work_money_sources`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | YES |  | NULL |  |  |
| create_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 1,
    "title": "เงินงบประมาณ",
    "create_at": "2025-05-06 15:24:00"
  },
  {
    "id": 2,
    "title": "เงินบำรุง",
    "create_at": "2025-05-06 15:24:07"
  }
]
```
