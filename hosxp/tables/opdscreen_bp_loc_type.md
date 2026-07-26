# `opdscreen_bp_loc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_bp_loc_type_id | int(11) | NO | PRI | 0 |  |  |
| opdscreen_bp_loc_type_name | varchar(200) | YES | UNI | NULL |  |  |
| is_default | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opdscreen_bp_loc_type_name | opdscreen_bp_loc_type_name | yes | 1 |
| PRIMARY | opdscreen_bp_loc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "opdscreen_bp_loc_type_id": 1,
    "opdscreen_bp_loc_type_name": "แขนซ้าย",
    "is_default": null
  },
  {
    "opdscreen_bp_loc_type_id": 2,
    "opdscreen_bp_loc_type_name": "แขนขวา",
    "is_default": "Y"
  },
  {
    "opdscreen_bp_loc_type_id": 3,
    "opdscreen_bp_loc_type_name": "เท้าซ้าย",
    "is_default": null
  },
  {
    "opdscreen_bp_loc_type_id": 4,
    "opdscreen_bp_loc_type_name": "เท้าขวา",
    "is_default": null
  }
]
```
