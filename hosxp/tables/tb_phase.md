# `tb_phase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_phase_id | int(11) | NO | PRI | 0 |  |  |
| tb_phase_name | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_phase_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "tb_phase_id": 1,
    "tb_phase_name": "เข้มข้น",
    "hos_guid": null
  },
  {
    "tb_phase_id": 2,
    "tb_phase_name": "ต่อเนื่อง",
    "hos_guid": null
  }
]
```
