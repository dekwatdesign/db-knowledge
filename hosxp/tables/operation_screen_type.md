# `operation_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_screen_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_screen_type_name | operation_screen_type_name | yes | 1 |
| PRIMARY | operation_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_screen_type_id": 2,
    "operation_screen_type_name": "Peri-Operative"
  },
  {
    "operation_screen_type_id": 3,
    "operation_screen_type_name": "Post-Operative"
  },
  {
    "operation_screen_type_id": 1,
    "operation_screen_type_name": "Pre-Operative"
  }
]
```
