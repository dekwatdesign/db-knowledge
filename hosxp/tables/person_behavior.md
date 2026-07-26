# `person_behavior`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_behavior_id | int(11) | NO | PRI | 0 |  |  |
| person_behavior_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_behavior_name | person_behavior_name | yes | 1 |
| PRIMARY | person_behavior_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_behavior_id": 1,
    "person_behavior_name": "การสูบบุหรี่",
    "hos_guid": "{D298E8D5-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 2,
    "person_behavior_name": "การดื่มแอลกอฮอลก์",
    "hos_guid": "{D298F05A-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 3,
    "person_behavior_name": "การออกกำลังกาย",
    "hos_guid": "{D298F1D5-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 4,
    "person_behavior_name": "การประสบอุบัติเหตุ",
    "hos_guid": "{D298F335-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 5,
    "person_behavior_name": "การดื่มเครื่องดื่มชูกำลัง",
    "hos_guid": "{D298F490-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 6,
    "person_behavior_name": "การใช้สารเสพติด",
    "hos_guid": "{D298F5E8-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 7,
    "person_behavior_name": "การใช้ยาชุด",
    "hos_guid": "{D298F73F-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_behavior_id": 8,
    "person_behavior_name": "การบริโภคอาหารรสหวานจัด",
    "hos_guid": "{D298FAB5-9B4C-11DE-B573-1E11FBB7A512}"
  }
]
```
