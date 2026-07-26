# `village_school_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| school_type_id | int(11) | NO | PRI | 0 |  |  |
| school_type_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | school_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "school_type_id": 1,
    "school_type_name": "เตรียมอนุบาล-ประถมศึกษา",
    "hos_guid": ""
  },
  {
    "school_type_id": 2,
    "school_type_name": "เตรียมอนุบาล-มัธยมศึกษาตอนต้น",
    "hos_guid": ""
  },
  {
    "school_type_id": 3,
    "school_type_name": "เตรียมอนุบาล-อนุบาล",
    "hos_guid": ""
  },
  {
    "school_type_id": 4,
    "school_type_name": "อนุบาล",
    "hos_guid": ""
  },
  {
    "school_type_id": 5,
    "school_type_name": "อนุบาล-ประถมศึกษา",
    "hos_guid": ""
  },
  {
    "school_type_id": 6,
    "school_type_name": "อนุบาล-มัธยมศึกษาตอนต้น",
    "hos_guid": ""
  },
  {
    "school_type_id": 7,
    "school_type_name": "อนุบาล-มัธยมศึกษาตอนปลาย",
    "hos_guid": ""
  },
  {
    "school_type_id": 8,
    "school_type_name": "ประถมศึกษา",
    "hos_guid": ""
  }
]
```
