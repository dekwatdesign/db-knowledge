# `beauty_price_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_price_source_id | int(11) | NO | PRI | 0 |  |  |
| beauty_price_source_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_price_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "beauty_price_source_id": 1,
    "beauty_price_source_name": "ราคาแพ็กเกจ",
    "active_status": "Y"
  },
  {
    "beauty_price_source_id": 2,
    "beauty_price_source_name": "ราคาหัตถการ",
    "active_status": "Y"
  }
]
```
