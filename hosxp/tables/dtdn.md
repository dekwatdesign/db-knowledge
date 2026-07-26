# `dtdn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dn | varchar(7) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| regdate | date | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| dental_patient_type_id | int(11) | YES |  | NULL |  |  |
| dental_pt_follow_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_regdate | regdate | no | 1 |
| PRIMARY | dn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dn": "5400001",
    "hn": "530175548",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400002",
    "hn": "530085351",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400003",
    "hn": "530233049",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400004",
    "hn": "530216652",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400005",
    "hn": "530196548",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400006",
    "hn": "530016047",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400007",
    "hn": "540001707",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  },
  {
    "dn": "5400008",
    "hn": "540001709",
    "regdate": "2011-10-10",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dental_patient_type_id": null,
    "dental_pt_follow_type_id": null
  }
]
```
