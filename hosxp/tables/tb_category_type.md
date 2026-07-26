# `tb_category_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_category_type_id | int(11) | NO | PRI | 0 |  |  |
| tb_category_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_category_type_name | tb_category_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_category_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "tb_category_type_id": 1,
    "tb_category_type_name": "CAT 1 (2HRZE/4HR)",
    "hos_guid": null
  },
  {
    "tb_category_type_id": 2,
    "tb_category_type_name": "CAT 2 (2HRZES/1HRZE/5HRE)",
    "hos_guid": null
  },
  {
    "tb_category_type_id": 3,
    "tb_category_type_name": "CAT 3 (2HRZ/4HR )",
    "hos_guid": null
  },
  {
    "tb_category_type_id": 4,
    "tb_category_type_name": "CAT 4 (Modifield)",
    "hos_guid": null
  }
]
```
