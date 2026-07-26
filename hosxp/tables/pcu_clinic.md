# `pcu_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| chronic | char(1) | YES |  | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| labparam | varchar(10) | YES |  | NULL |  |  |
| oapp_activity_id | varchar(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | clinic | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinic": "001",
    "name": "โรคเบาหวาน",
    "chronic": "Y",
    "icd10": "E100",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "002",
    "name": "โรคความดันโลหิตสูง",
    "chronic": "Y",
    "icd10": "I10",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "003",
    "name": "โรคตับอักเสบเรื้อรังและโรคตับแข็ง",
    "chronic": "Y",
    "icd10": "K73",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "004",
    "name": "โรคหัวใจล้มเหลว",
    "chronic": "Y",
    "icd10": "I509",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "005",
    "name": "Cerebrovascular accident",
    "chronic": "Y",
    "icd10": "I64.0",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "006",
    "name": "โรคมะเร็ง",
    "chronic": "Y",
    "icd10": "C00",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "007",
    "name": "โรคมะเร็งเต้านม",
    "chronic": "Y",
    "icd10": "C509",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinic": "008",
    "name": "โรคมะเร็งปากมดลูก",
    "chronic": "Y",
    "icd10": "C53",
    "labparam": null,
    "oapp_activity_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
