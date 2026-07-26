# `dw_blacklist_keyword`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_blacklist_keyword_id | int(11) | NO | PRI | 0 |  |  |
| dw_blacklist_keyword_type_id | int(11) | YES | MUL | NULL |  |  |
| keyword_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | dw_blacklist_keyword_type_id | yes | 1 |
| ix_unique | keyword_name | yes | 2 |
| PRIMARY | dw_blacklist_keyword_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dw_blacklist_keyword_id": 3,
    "dw_blacklist_keyword_type_id": 1,
    "keyword_name": "AID"
  },
  {
    "dw_blacklist_keyword_id": 5,
    "dw_blacklist_keyword_type_id": 1,
    "keyword_name": "HIV"
  },
  {
    "dw_blacklist_keyword_id": 1,
    "dw_blacklist_keyword_type_id": 1,
    "keyword_name": "ข่มขืน"
  },
  {
    "dw_blacklist_keyword_id": 2,
    "dw_blacklist_keyword_type_id": 1,
    "keyword_name": "ชำเรา"
  },
  {
    "dw_blacklist_keyword_id": 4,
    "dw_blacklist_keyword_type_id": 1,
    "keyword_name": "เอดส์"
  }
]
```
