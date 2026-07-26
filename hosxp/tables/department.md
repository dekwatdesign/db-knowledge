# `department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dep_id | varchar(5) | NO | PRI |  |  |  |
| dep_name | varchar(500) | YES |  | NULL |  |  |
| spclty_id | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dep_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "dep_id": "01",
    "dep_name": "ทดสอบห้องตรวจ",
    "spclty_id": "01"
  }
]
```
