# `dis_reference`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_reference_id | int(11) | NO | PRI | 0 |  |  |
| dis_reference_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_reference_name | dis_reference_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_reference_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dis_reference_id": 1,
    "dis_reference_name": "AHFS",
    "hos_guid": null
  },
  {
    "dis_reference_id": 2,
    "dis_reference_name": "Drug Facts and Comparision",
    "hos_guid": null
  },
  {
    "dis_reference_id": 3,
    "dis_reference_name": "Drug Information Handbook",
    "hos_guid": null
  },
  {
    "dis_reference_id": 4,
    "dis_reference_name": "JPR",
    "hos_guid": null
  },
  {
    "dis_reference_id": 5,
    "dis_reference_name": "PDR",
    "hos_guid": null
  },
  {
    "dis_reference_id": 6,
    "dis_reference_name": "USPDI Vol 1",
    "hos_guid": null
  },
  {
    "dis_reference_id": 7,
    "dis_reference_name": "DrugDex",
    "hos_guid": null
  },
  {
    "dis_reference_id": 8,
    "dis_reference_name": "Martindales",
    "hos_guid": null
  }
]
```
