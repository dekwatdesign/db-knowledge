# `dental_care_school_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_school_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_care_school_type_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_care_school_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dental_care_school_type_id": 1,
    "dental_care_school_type_name": "ศพด.",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 2,
    "dental_care_school_type_name": "ประถมศึกษารัฐบาล",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 3,
    "dental_care_school_type_name": "ประถมศึกษาเทศบาล",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 4,
    "dental_care_school_type_name": "ประถมศึกษาท้องถิ่น",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 5,
    "dental_care_school_type_name": "ประถมศึกษาเอกชน",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 6,
    "dental_care_school_type_name": "มัธยมศึกษารัฐบาล",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 7,
    "dental_care_school_type_name": "มัธยมศึกษาเทศบาล",
    "hos_guid": null
  },
  {
    "dental_care_school_type_id": 8,
    "dental_care_school_type_name": "มัธยมศึกษาท้องถิ่น",
    "hos_guid": null
  }
]
```
