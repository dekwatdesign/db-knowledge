# `person_behavior_value_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_behavior_value_list_id | int(11) | NO | PRI | 0 |  |  |
| person_behavior_id | int(11) | YES |  | NULL |  |  |
| value_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_behavior_value_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_behavior_value_list_id": 1,
    "person_behavior_id": 1,
    "value_name": "ไม่สูบ",
    "hos_guid": "{D500207F-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 2,
    "person_behavior_id": 1,
    "value_name": "สูบนานๆ ครั้ง",
    "hos_guid": "{D500267B-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 3,
    "person_behavior_id": 1,
    "value_name": "สูบประจำ",
    "hos_guid": "{D500276D-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 4,
    "person_behavior_id": 2,
    "value_name": "ไม่ดื่ม",
    "hos_guid": "{D500284F-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 5,
    "person_behavior_id": 2,
    "value_name": "ดื่มนานๆ ครั้ง",
    "hos_guid": "{D500292B-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 6,
    "person_behavior_id": 2,
    "value_name": "ดื่ม 1 - 2 ครั้งต่อเดือน",
    "hos_guid": "{D5002A06-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 7,
    "person_behavior_id": 2,
    "value_name": "ดื่ม 1 - 2 ครั้งต่อสัปดาห์",
    "hos_guid": "{D5002AE2-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_value_list_id": 8,
    "person_behavior_id": 2,
    "value_name": "ดื่ม 3 - 4 ครั้งต่อสัปดาห์",
    "hos_guid": "{D5002BBC-9B4C-11DE-B573-1E11FBB7A512}"
  }
]
```
