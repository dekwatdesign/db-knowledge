# `person_finger_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_finger_scan_id | int(11) | NO | PRI | 0 |  |  |
| template | blob | YES |  | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| pf_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| ix_pf_id | pf_id | no | 1 |
| PRIMARY | person_finger_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
