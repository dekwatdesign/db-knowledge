# `village_priest_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_priest_type_id | int(11) | NO | PRI | 0 |  |  |
| village_priest_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_priest_type_name | village_priest_type_name | yes | 1 |
| PRIMARY | village_priest_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_priest_type_id": 1,
    "village_priest_type_name": "พระ",
    "hos_guid": "{A44BAD87-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 2,
    "village_priest_type_name": "เณร",
    "hos_guid": "{A44BB427-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 3,
    "village_priest_type_name": "ชี",
    "hos_guid": "{A44BB585-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 4,
    "village_priest_type_name": "เด็กวัด",
    "hos_guid": "{A44BB6D1-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 5,
    "village_priest_type_name": "บาทหลวง",
    "hos_guid": "{A44BB816-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 6,
    "village_priest_type_name": "ซิสเตอร์",
    "hos_guid": "{A44BB959-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 7,
    "village_priest_type_name": "โต๊ะอิหม่าม",
    "hos_guid": "{A44BBAAF-9B4D-11DE-B573-1E11FBB7A512}"
  },
  {
    "village_priest_type_id": 8,
    "village_priest_type_name": "กอเต็บ",
    "hos_guid": "{A44BBBF3-9B4D-11DE-B573-1E11FBB7A512}"
  }
]
```
