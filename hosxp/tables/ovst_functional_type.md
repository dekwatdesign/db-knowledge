# `ovst_functional_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_functional_type_id | int(11) | NO | PRI | 0 |  |  |
| ovst_functional_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ovst_functional_type_name | ovst_functional_type_name | yes | 1 |
| PRIMARY | ovst_functional_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ovst_functional_type_id": 1,
    "ovst_functional_type_name": "Barthead ADL Index",
    "hos_guid": null
  },
  {
    "ovst_functional_type_id": 2,
    "ovst_functional_type_name": "IADL",
    "hos_guid": null
  },
  {
    "ovst_functional_type_id": 3,
    "ovst_functional_type_name": "Mental State Examination",
    "hos_guid": null
  },
  {
    "ovst_functional_type_id": 8,
    "ovst_functional_type_name": "Other",
    "hos_guid": null
  },
  {
    "ovst_functional_type_id": 9,
    "ovst_functional_type_name": "Unspecified",
    "hos_guid": null
  }
]
```
