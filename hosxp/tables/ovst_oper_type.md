# `ovst_oper_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_oper_type | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | ovst_oper_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ovst_oper_type": 1,
    "name": "Main operation/procedure for main condition",
    "hos_guid": null
  },
  {
    "ovst_oper_type": 2,
    "name": "Main operation/procedure for co-morbidity or complication",
    "hos_guid": null
  },
  {
    "ovst_oper_type": 3,
    "name": "Other operation/procedures",
    "hos_guid": null
  }
]
```
