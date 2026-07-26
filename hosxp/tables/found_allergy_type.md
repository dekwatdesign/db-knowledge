# `found_allergy_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| found_allergy | char(1) | NO | PRI |  |  |  |
| found_allergy_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_found_allergy_type_name | found_allergy_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | found_allergy | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "found_allergy": "N",
    "found_allergy_type_name": "ปฏิเสธการแพ้",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "found_allergy": "U",
    "found_allergy_type_name": "ไม่ทราบ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "found_allergy": "V",
    "found_allergy_type_name": "มีประวัติแพ้ยาแล้ว",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "found_allergy": "Y",
    "found_allergy_type_name": "มีอาการแพ้ยา",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
