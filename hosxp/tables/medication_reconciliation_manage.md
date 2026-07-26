# `medication_reconciliation_manage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_reconciliation_manage_id | int(11) | YES |  | NULL |  |  |
| medication_reconciliation_manage_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_medication_reconciliation_manage_name | medication_reconciliation_manage_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "medication_reconciliation_manage_id": 2,
    "medication_reconciliation_manage_name": "เข้าระบบโรงพยาบาล",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "medication_reconciliation_manage_id": 1,
    "medication_reconciliation_manage_name": "ผู้ป่วยจัดการเอง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
