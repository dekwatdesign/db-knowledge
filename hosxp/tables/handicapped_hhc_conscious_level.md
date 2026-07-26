# `handicapped_hhc_conscious_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_conscious_level_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_conscious_level_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_conscious_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "handicapped_hhc_conscious_level_id": 1,
    "handicapped_hhc_conscious_level_name": "ระดับความรู้สึกตัวดี",
    "hos_guid": null
  },
  {
    "handicapped_hhc_conscious_level_id": 2,
    "handicapped_hhc_conscious_level_name": "ความรู้สึกสับสน",
    "hos_guid": null
  },
  {
    "handicapped_hhc_conscious_level_id": 3,
    "handicapped_hhc_conscious_level_name": "การรับรู้ผิดปกติ",
    "hos_guid": null
  },
  {
    "handicapped_hhc_conscious_level_id": 4,
    "handicapped_hhc_conscious_level_name": "ระดับความรู้สึกง่วงงุน",
    "hos_guid": null
  },
  {
    "handicapped_hhc_conscious_level_id": 5,
    "handicapped_hhc_conscious_level_name": "ระดับความรู้สึกไม่รู้สึกตัว",
    "hos_guid": null
  },
  {
    "handicapped_hhc_conscious_level_id": 6,
    "handicapped_hhc_conscious_level_name": "ระดับหมดสติ",
    "hos_guid": null
  }
]
```
