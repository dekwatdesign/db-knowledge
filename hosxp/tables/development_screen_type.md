# `development_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| development_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| development_screen_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_development_screen_type_name | development_screen_type_name | yes | 1 |
| PRIMARY | development_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "development_screen_type_id": 1,
    "development_screen_type_name": "ปกติ"
  },
  {
    "development_screen_type_id": 2,
    "development_screen_type_name": "ผิดปกติ"
  }
]
```
