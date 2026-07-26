# `beauty_sale_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_sale_type_id | int(11) | NO | PRI | 0 |  |  |
| beauty_sale_type_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_sale_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "beauty_sale_type_id": 1,
    "beauty_sale_type_name": "ขาย",
    "active_status": "Y"
  },
  {
    "beauty_sale_type_id": 2,
    "beauty_sale_type_name": "ฟรี",
    "active_status": "Y"
  }
]
```
