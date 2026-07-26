# `edoc_send_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_send_type_id | int(11) | NO | PRI | 0 |  |  |
| edoc_send_type_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_send_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "edoc_send_type_id": 1,
    "edoc_send_type_name": "ส่งจากงานสารบรรณ"
  },
  {
    "edoc_send_type_id": 2,
    "edoc_send_type_name": "ส่งจากแผนก"
  }
]
```
