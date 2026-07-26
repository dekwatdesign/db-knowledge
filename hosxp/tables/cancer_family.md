# `cancer_family`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_familiy_id | int(11) | NO | PRI | 0 |  |  |
| cancer_family_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_familiy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_familiy_id": 1,
    "cancer_family_name": "พ่อ",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 2,
    "cancer_family_name": "แม่",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 3,
    "cancer_family_name": "พี่",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 4,
    "cancer_family_name": "น้อง",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 5,
    "cancer_family_name": "ปู่",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 6,
    "cancer_family_name": "ย่า",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 7,
    "cancer_family_name": "ตา",
    "hos_guid": null
  },
  {
    "cancer_familiy_id": 9,
    "cancer_family_name": "ยาย",
    "hos_guid": null
  }
]
```
