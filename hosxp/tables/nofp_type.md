# `nofp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nofp_type_id | int(11) | NO | PRI | 0 |  |  |
| nofp_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_nofp_type_name | nofp_type_name | yes | 1 |
| PRIMARY | nofp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "nofp_type_id": 1,
    "nofp_type_name": "ต้องการบุตร",
    "hos_guid": null
  },
  {
    "nofp_type_id": 2,
    "nofp_type_name": "หมันธรรมชาติ",
    "hos_guid": null
  },
  {
    "nofp_type_id": 3,
    "nofp_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
