# `diagtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagtype | char(2) | NO | PRI |  |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| nhso_code | varchar(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | diagtype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "diagtype": "1",
    "name": "Principal Diagnosis",
    "nhso_code": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "diagtype": "2",
    "name": "โรคร่วม (Co morbidity)",
    "nhso_code": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "diagtype": "3",
    "name": "โรคแทรกซ้อน (Complication)",
    "nhso_code": "3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "diagtype": "4",
    "name": "อื่นๆ (Others)",
    "nhso_code": "4",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "diagtype": "5",
    "name": "สาเหตุภายนอก (External Cause)",
    "nhso_code": "5",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
