# `pttype_price_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_price_group_id | int(11) | NO | PRI | 0 |  |  |
| pttype_price_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_price_group_name | pttype_price_group_name | yes | 1 |
| PRIMARY | pttype_price_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "pttype_price_group_id": 1,
    "pttype_price_group_name": "ข้าราชการ"
  },
  {
    "pttype_price_group_id": 2,
    "pttype_price_group_name": "UC"
  },
  {
    "pttype_price_group_id": 3,
    "pttype_price_group_name": "ประกันสังคม"
  },
  {
    "pttype_price_group_id": 4,
    "pttype_price_group_name": "ชำระเงินเอง"
  }
]
```
