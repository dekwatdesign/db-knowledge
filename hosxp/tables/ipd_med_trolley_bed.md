# `ipd_med_trolley_bed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_med_trolley_bed_id | int(11) | NO | PRI | 0 |  |  |
| ipd_med_trolley_id | int(11) | YES |  | NULL |  |  |
| bedno | varchar(10) | YES | MUL | NULL |  |  |
| slot_no | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_trolley_id_slot_no | slot_no | yes | 1 |
| ix_trolley_id_slot_no | ipd_med_trolley_id | yes | 2 |
| ix_unique | bedno | no | 1 |
| ix_unique | ipd_med_trolley_id | no | 2 |
| PRIMARY | ipd_med_trolley_bed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
