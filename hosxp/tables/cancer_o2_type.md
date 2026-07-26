# `cancer_o2_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_o2_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_o2_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_o2_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_o2_type_id": 1,
    "cancer_o2_type_name": "Room air",
    "hos_guid": null
  },
  {
    "cancer_o2_type_id": 2,
    "cancer_o2_type_name": "O2 canula 3l/min",
    "hos_guid": null
  },
  {
    "cancer_o2_type_id": 3,
    "cancer_o2_type_name": "O2 Mask 10/min",
    "hos_guid": null
  }
]
```
