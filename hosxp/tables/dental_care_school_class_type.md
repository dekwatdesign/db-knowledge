# `dental_care_school_class_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_school_class_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_care_school_class_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_care_school_class_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dental_care_school_class_type_id": 1,
    "dental_care_school_class_type_name": "ศพด. ชั้นที่ 1-3",
    "hos_guid": null,
    "export_code": null
  },
  {
    "dental_care_school_class_type_id": 2,
    "dental_care_school_class_type_name": "ประถมศึกษา ชั้นที่ 1-6",
    "hos_guid": null,
    "export_code": null
  },
  {
    "dental_care_school_class_type_id": 3,
    "dental_care_school_class_type_name": "มัธยมศึกษา ชั้นที่ 1-6",
    "hos_guid": null,
    "export_code": null
  }
]
```
