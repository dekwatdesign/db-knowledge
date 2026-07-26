# `tb_category_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_category_subtype_id | int(11) | NO | PRI | 0 |  |  |
| tb_category_subtype_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_category_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "tb_category_subtype_id": 1,
    "tb_category_subtype_name": "positive",
    "hos_guid": null
  },
  {
    "tb_category_subtype_id": 2,
    "tb_category_subtype_name": "negative",
    "hos_guid": null
  },
  {
    "tb_category_subtype_id": 3,
    "tb_category_subtype_name": "smear not done",
    "hos_guid": null
  }
]
```
