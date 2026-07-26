# `school_pp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| school_pp_type_id | int(11) | NO | PRI | 0 |  |  |
| school_pp_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_school_pp_type_name | school_pp_type_name | yes | 1 |
| PRIMARY | school_pp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "school_pp_type_id": 1,
    "school_pp_type_name": "ไม่เข้าโครงการ",
    "hos_guid": null
  },
  {
    "school_pp_type_id": 2,
    "school_pp_type_name": "อยู่ระหว่างรอประเมิน",
    "hos_guid": null
  },
  {
    "school_pp_type_id": 3,
    "school_pp_type_name": "ระดับทองแดง",
    "hos_guid": null
  },
  {
    "school_pp_type_id": 4,
    "school_pp_type_name": "ระดับเงิน",
    "hos_guid": null
  },
  {
    "school_pp_type_id": 5,
    "school_pp_type_name": "ระดับทอง",
    "hos_guid": null
  },
  {
    "school_pp_type_id": 6,
    "school_pp_type_name": "ระดับเพชร",
    "hos_guid": null
  }
]
```
