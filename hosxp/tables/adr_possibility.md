# `adr_possibility`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_possibility_id | int(11) | NO | PRI | 0 |  |  |
| adr_possibility_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_possibility_name | adr_possibility_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_possibility_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "adr_possibility_id": 1,
    "adr_possibility_name": "ใช่แน่นอน (Certain)",
    "hos_guid": null
  },
  {
    "adr_possibility_id": 2,
    "adr_possibility_name": "น่าจะใช่ (Probable)",
    "hos_guid": null
  },
  {
    "adr_possibility_id": 3,
    "adr_possibility_name": "อาจจะใช่ (Possible)",
    "hos_guid": null
  },
  {
    "adr_possibility_id": 4,
    "adr_possibility_name": "ไม่น่าใช่ (Unlikely)",
    "hos_guid": null
  },
  {
    "adr_possibility_id": 5,
    "adr_possibility_name": "ไม่สามารถระบุระดับ (Unclassified)",
    "hos_guid": null
  }
]
```
