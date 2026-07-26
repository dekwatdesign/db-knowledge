# `online_register_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| online_register_type_id | int(11) | NO | PRI | 0 |  |  |
| online_register_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_online_register_type_name | online_register_type_name | yes | 1 |
| PRIMARY | online_register_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "online_register_type_id": 1,
    "online_register_type_name": "BMS DataCenter"
  },
  {
    "online_register_type_id": 2,
    "online_register_type_name": "BMS Cloud"
  },
  {
    "online_register_type_id": 9,
    "online_register_type_name": "Not Online"
  }
]
```
