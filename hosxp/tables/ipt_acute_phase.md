# `ipt_acute_phase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_acute_phase_id | int(11) | NO | PRI | 0 |  |  |
| ipt_acute_phase_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_acute_phase_name | ipt_acute_phase_name | yes | 1 |
| PRIMARY | ipt_acute_phase_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_acute_phase_id": 1,
    "ipt_acute_phase_name": "Acute phase 1"
  },
  {
    "ipt_acute_phase_id": 2,
    "ipt_acute_phase_name": "Acute phase 2"
  },
  {
    "ipt_acute_phase_id": 3,
    "ipt_acute_phase_name": "Sub acute"
  }
]
```
