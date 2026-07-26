# `ipt_pregnancy_phase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pregnancy_phase_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | pregnancy_phase_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "pregnancy_phase_id": 1,
    "name": "ขณะตั้งครรภ์",
    "hos_guid": null
  },
  {
    "pregnancy_phase_id": 2,
    "name": "ขณะคลอด",
    "hos_guid": null
  },
  {
    "pregnancy_phase_id": 3,
    "name": "หลังคลอด",
    "hos_guid": null
  }
]
```
