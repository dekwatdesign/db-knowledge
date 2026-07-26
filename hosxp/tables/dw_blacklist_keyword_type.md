# `dw_blacklist_keyword_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_blacklist_keyword_type_id | int(11) | NO | PRI | 0 |  |  |
| dw_blacklist_keyword_type_name | varchar(150) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_blacklist_keyword_type_name | dw_blacklist_keyword_type_name | yes | 1 |
| PRIMARY | dw_blacklist_keyword_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dw_blacklist_keyword_type_id": 3,
    "dw_blacklist_keyword_type_name": "ผล Lab"
  },
  {
    "dw_blacklist_keyword_type_id": 2,
    "dw_blacklist_keyword_type_name": "ผลการวินิจฉัย (ICD10)"
  },
  {
    "dw_blacklist_keyword_type_id": 1,
    "dw_blacklist_keyword_type_name": "อาการสำคัญ/การตรวจร่างกาย"
  }
]
```
