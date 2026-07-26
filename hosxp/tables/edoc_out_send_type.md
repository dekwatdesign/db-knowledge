# `edoc_out_send_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_out_send_type_id | int(11) | NO | PRI | 0 |  |  |
| edoc_out_send_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_out_send_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "edoc_out_send_type_id": 1,
    "edoc_out_send_type_name": "นำส่งเอง"
  },
  {
    "edoc_out_send_type_id": 2,
    "edoc_out_send_type_name": "ให้สารบัญกลางส่ง"
  }
]
```
