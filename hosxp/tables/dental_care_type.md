# `dental_care_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_care_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_care_type_name | dental_care_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_care_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dental_care_type_id": 1,
    "dental_care_type_name": "หญิงตั้งครรภ์",
    "hos_guid": null
  },
  {
    "dental_care_type_id": 2,
    "dental_care_type_name": "เด็กก่อนวัยเรียน",
    "hos_guid": null
  },
  {
    "dental_care_type_id": 3,
    "dental_care_type_name": "เด็กวัยเรียน",
    "hos_guid": null
  },
  {
    "dental_care_type_id": 4,
    "dental_care_type_name": "ผู้สูงอายุ",
    "hos_guid": null
  },
  {
    "dental_care_type_id": 5,
    "dental_care_type_name": "กลุ่มอื่นๆ",
    "hos_guid": null
  }
]
```
