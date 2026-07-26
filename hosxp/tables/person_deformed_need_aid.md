# `person_deformed_need_aid`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_need_aid_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_id | int(11) | YES |  | NULL |  |  |
| person_deformed_need_aid_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_deformed_need_aid_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_need_aid_id": 1,
    "person_deformed_id": 15,
    "person_deformed_need_aid_type_id": 0,
    "hos_guid": "{DDC660B9-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_id": 2,
    "person_deformed_id": 16,
    "person_deformed_need_aid_type_id": 0,
    "hos_guid": "{DDC6677F-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_id": 3,
    "person_deformed_id": 17,
    "person_deformed_need_aid_type_id": 1,
    "hos_guid": "{DDC668DD-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_id": 4,
    "person_deformed_id": 17,
    "person_deformed_need_aid_type_id": 3,
    "hos_guid": "{DDC66A28-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_id": 5,
    "person_deformed_id": 17,
    "person_deformed_need_aid_type_id": 5,
    "hos_guid": "{DDC66B6A-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_id": 6,
    "person_deformed_id": 18,
    "person_deformed_need_aid_type_id": 1,
    "hos_guid": "{DDC66CAC-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_id": 7,
    "person_deformed_id": 19,
    "person_deformed_need_aid_type_id": 7,
    "hos_guid": "{6ECBAEAA-9DE0-11DE-B8B0-2ED49A8AE1CB}"
  },
  {
    "person_deformed_need_aid_id": 8,
    "person_deformed_id": 20,
    "person_deformed_need_aid_type_id": 2,
    "hos_guid": "{6ECBB508-9DE0-11DE-B8B0-2ED49A8AE1CB}"
  }
]
```
