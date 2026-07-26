# `clinicmember_tb_category_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_category_subtype_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_category_subtype_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_category_subtype_name | clinicmember_tb_category_subtype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_category_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinicmember_tb_category_subtype_id": 1,
    "clinicmember_tb_category_subtype_name": "New M+",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 2,
    "clinicmember_tb_category_subtype_name": "New M-",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 3,
    "clinicmember_tb_category_subtype_name": "New EP",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 4,
    "clinicmember_tb_category_subtype_name": "Relapse",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 5,
    "clinicmember_tb_category_subtype_name": "TAF",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 6,
    "clinicmember_tb_category_subtype_name": "TAD+",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 7,
    "clinicmember_tb_category_subtype_name": "TAD-",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_subtype_id": 8,
    "clinicmember_tb_category_subtype_name": "TAD EP",
    "hos_guid": null
  }
]
```
