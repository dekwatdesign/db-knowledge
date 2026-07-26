# `cancer_machine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_machine_id | int(11) | NO | PRI | 0 |  |  |
| cancer_machine_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_machine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_machine_id": 1,
    "cancer_machine_name": "Co-60",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 2,
    "cancer_machine_name": "Linac 6 Mev",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 3,
    "cancer_machine_name": "Linac 9 Mev",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 4,
    "cancer_machine_name": "Linac 12 Mev",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 5,
    "cancer_machine_name": "Linac 15 Mev",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 6,
    "cancer_machine_name": "Linac 18 Mev",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 7,
    "cancer_machine_name": "Linac 6 MV",
    "hos_guid": null
  },
  {
    "cancer_machine_id": 8,
    "cancer_machine_name": "Linac 10 MV MLC",
    "hos_guid": null
  }
]
```
