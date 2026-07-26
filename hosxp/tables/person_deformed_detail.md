# `person_deformed_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_id | int(11) | YES | MUL | NULL |  |  |
| deformed_id | int(11) | YES |  | NULL |  |  |
| deformed_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_deformed_type_id | int(11) | YES |  | NULL |  |  |
| organ | varchar(200) | YES |  | NULL |  |  |
| person_deformed_level_id | int(11) | YES |  | NULL |  |  |
| person_deformed_cause_type_id | int(11) | YES |  | NULL |  |  |
| icd10 | varchar(15) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| deformed_detail_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ixperson_deform_id | person_deformed_id | no | 1 |
| PRIMARY | person_deformed_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_detail_id": 1,
    "person_deformed_id": 1,
    "deformed_id": 3,
    "deformed_date": null,
    "hos_guid": "{DB993A4C-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "อัมพาตครึ่งซีก",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 2,
    "person_deformed_id": 2,
    "deformed_id": 5,
    "deformed_date": null,
    "hos_guid": "{DB993FAE-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "ปัญญาอ่อน",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 3,
    "person_deformed_id": 3,
    "deformed_id": 5,
    "deformed_date": null,
    "hos_guid": "{DB99409E-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "สติปัญญาช้า",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 4,
    "person_deformed_id": 4,
    "deformed_id": 2,
    "deformed_date": null,
    "hos_guid": "{DB994180-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "ใบ้",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 5,
    "person_deformed_id": 5,
    "deformed_id": 3,
    "deformed_date": null,
    "hos_guid": "{DB99425F-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "ขาขวาอ่อนแรง",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 6,
    "person_deformed_id": 6,
    "deformed_id": 3,
    "deformed_date": null,
    "hos_guid": "{DB99433E-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "แขนขาด้านขวาอ่อนแรง",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 7,
    "person_deformed_id": 7,
    "deformed_id": 4,
    "deformed_date": null,
    "hos_guid": "{DB99441B-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": 4,
    "organ": "ลมชัก",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  },
  {
    "person_deformed_detail_id": 8,
    "person_deformed_id": 8,
    "deformed_id": 3,
    "deformed_date": null,
    "hos_guid": "{DB9944F8-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_type_id": null,
    "organ": "อัมพาตครึ่งซีก",
    "person_deformed_level_id": null,
    "person_deformed_cause_type_id": null,
    "icd10": null,
    "entry_datetime": null,
    "deformed_detail_note": null
  }
]
```
