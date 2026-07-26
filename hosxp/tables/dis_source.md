# `dis_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_source_id | int(11) | NO | PRI | 0 |  |  |
| dis_source_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_source_name | dis_source_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dis_source_id": 1,
    "dis_source_name": "เอกสาร (1st)",
    "hos_guid": null
  },
  {
    "dis_source_id": 2,
    "dis_source_name": "เอกสาร (2nd)",
    "hos_guid": null
  },
  {
    "dis_source_id": 3,
    "dis_source_name": "เอกสาร (3rd)",
    "hos_guid": null
  },
  {
    "dis_source_id": 4,
    "dis_source_name": "DIS Database",
    "hos_guid": null
  },
  {
    "dis_source_id": 5,
    "dis_source_name": "CD-ROM",
    "hos_guid": null
  },
  {
    "dis_source_id": 6,
    "dis_source_name": "Online (Internet)",
    "hos_guid": null
  },
  {
    "dis_source_id": 7,
    "dis_source_name": "Drug file",
    "hos_guid": null
  },
  {
    "dis_source_id": 8,
    "dis_source_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
